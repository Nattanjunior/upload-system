import { Test, TestingModule } from '@nestjs/testing';
import { UploadAudioController } from './upload-audio.controller';
import { beforeEach, describe, expect, it } from '@jest/globals';

describe('UploadAudioController', () => {
  let controller: UploadAudioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadAudioController],
    }).compile();

    controller = module.get<UploadAudioController>(UploadAudioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
