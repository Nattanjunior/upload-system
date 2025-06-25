import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { beforeEach, describe, it, expect, beforeAll, jest } from '@jest/globals';
import { SupabaseService } from '../src/libs/supabase/supabase.service'

const limitAlloc = 1_848_576 * 5


describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  let supabaseService: SupabaseService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    supabaseService = moduleFixture.get<SupabaseService>(SupabaseService);
  });

  beforeEach(() => {
    jest.resetAllMocks();
  })


  it('Arquivo não invalido', async () => {
    return request(app.getHttpServer())
      .post('/upload/audio')
      .expect(400)
      .then((response) => {
        const body = response.body;
        expect(body).toEqual({
          message: 'Arquivo não enviado',
          statusCode: 400,
        });
      });
  });

  it('Arquivo de audio enviado', async () => {
    const file = {
      originalname: 'audio.mp3',
      mimetype: 'audio/mpeg',
      path: 'upload',
      buffer: Buffer.from(''),
      fieldname: 'file[]',
      filename: 'audio.mp3',
      size: limitAlloc,
      destination: './upload/audio.mp3',
    };

    const audioBuffer = Buffer.alloc(
      limitAlloc,
      JSON.stringify(file)
    );

    return request(app.getHttpServer())
      .post('/upload/audio')
      .attach('file', audioBuffer, {
        filename: 'audio.mp3',
        contentType: 'NOT'
      })
      .expect(400)
      .then((response) => {
        const body = response.body;
        expect(body).toEqual({
          message: 'Arquivo de audio invalido.',
          statusCode: 400,
        });
      });
  });

  it('Arquivo maior que o suportado (5mb)', async () => {
    const file = {
      originalname: 'audio.mp3',
      mimetype: 'audio/mpeg',
      path: 'upload',
      buffer: Buffer.from(''),
      fieldname: 'file[]',
      filename: 'audio.mp3',
      size: limitAlloc,
      destination: './upload/audio.mp3',
    };

    const audioBuffer = Buffer.alloc(
      limitAlloc + 1,
      JSON.stringify(file)
    );

    return request(app.getHttpServer())
      .post('/upload/audio')
      .attach('file', audioBuffer, {
        filename: 'audio.mp3',
        contentType: 'audio/mpeg'
      })
      .expect(400)
      .then((response) => {
        const body = response.body;
        expect(body).toEqual({
          message: 'Arquivo maior que o suportado (5mb)',
          statusCode: 400,
        });
      });
  });

  it('Arquivo .MP3 invalido', async () => {
    const file = {
      originalname: 'audio.mp#',
      mimetype: 'audio/mpeg',
      path: 'upload',
      buffer: Buffer.from(''),
      fieldname: 'file[]',
      filename: 'audio.mp#',
      size: limitAlloc,
      destination: './upload/audio.mp#',
    };

    const audioBuffer = Buffer.alloc(
      limitAlloc,
      JSON.stringify(file)
    );

    return request(app.getHttpServer())
      .post('/upload/audio')
      .attach('file', audioBuffer, {
        filename: 'audio.mp#',
        contentType: 'audio/mpeg'
      })
      .expect(400)
      .then((response) => {
        const body = response.body;
        expect(body).toEqual({
          message: 'Arquivo .MP3 invalido',
          statusCode: 400,
        });
      });
  });

  it('OK', async () => {
    const file = {
      originalname: 'audio.mp3',
      mimetype: 'audio/mpeg',
      path: 'upload',
      buffer: Buffer.from(''),
      fieldname: 'file[]',
      filename: 'audio.mp3',
      size: limitAlloc,
      destination: './upload/audio.mp3',
    };

    const audioBuffer = Buffer.alloc(
      limitAlloc,
      JSON.stringify(file)
    );

    jest.spyOn(supabaseService, 'uploadFile').mockResolvedValueOnce({
      data: {
        id: 'mock-id',
        path: '/upload/audio.mp3',
        fullPath: '/upload/audio.mp3'
      },
      error: null,
    });

    return request(app.getHttpServer())
      .post('/upload/audio')
      .attach('file', audioBuffer, {
        filename: 'audio.mp3',
        contentType: 'audio/mpeg'
      })
      .expect(201)
      .then((response) => {
        const body = response.body;
        expect(body).toEqual({
          data: {
            id: 'mock-id',
            path: '/upload/audio.mp3',
            fullPath: '/upload/audio.mp3'
          },
          error: null,
        });
      });
  });
});
