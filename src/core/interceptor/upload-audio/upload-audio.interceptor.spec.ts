import { describe, expect, it, jest } from '@jest/globals';
import { UploadAudioInterceptor } from './upload-audio.interceptor';
import { HttpException, type CallHandler, type ExecutionContext } from '@nestjs/common';

describe('UploadAudioInterceptor', () => {
  it('should be defined', () => {
    expect(new UploadAudioInterceptor()).toBeDefined();
  });


  it('Arquivo nao enviado', () => {
    const uploadAudioInterceptor = new UploadAudioInterceptor();

    const context = {
      switchToHttp: () => {
        return {
          getRequest: () => {
            return {};
          },
        };
      },
    } as ExecutionContext;

    const next = { handle: jest.fn() };

    try {
      uploadAudioInterceptor.intercept(context, next as CallHandler)
      throw new Error('Not throw');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toBe('Arquivo não enviado');
      expect(error.status).toBe(400);
    }

    expect(new UploadAudioInterceptor()).toBeDefined();
    expect(next.handle).toHaveBeenCalledTimes(0);

  });

  it('Arquivo de audio invalido', () => {
    const uploadAudioInterceptor = new UploadAudioInterceptor();

    const context = {
      switchToHttp: () => {
        return {
          getRequest: () => {
            return {
              file: {
                mimetype: 'NOT/SUPPORTED',
                size: 1_848_576 * 5
              }
            };
          },
        };
      },
    } as ExecutionContext;

    const next = { handle: jest.fn() };

    try {
      uploadAudioInterceptor.intercept(context, next as CallHandler)
      throw new Error('Not throw');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.message).toBe('Arquivo de audio invalido.');
      expect(error.status).toBe(400);
    }

    expect(new UploadAudioInterceptor()).toBeDefined();
    expect(next.handle).toHaveBeenCalledTimes(0);

  });
});
