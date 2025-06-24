import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { UploadAudioService } from './upload-audio.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload/audio')
export class UploadAudioController {

  constructor(private readonly UploadAudioService: UploadAudioService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    return this.UploadAudioService.execute(file);
  }
}





