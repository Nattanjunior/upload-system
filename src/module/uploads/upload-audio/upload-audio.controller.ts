import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  HttpCode
} from '@nestjs/common';
import { UploadAudioService } from './upload-audio.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadAudioInterceptor } from '../../../core/interceptor/upload-audio/upload-audio.interceptor';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('upload/audio')
export class UploadAudioController {

  constructor(private readonly UploadAudioService: UploadAudioService) { }

  @Post()
  @HttpCode(201)
  @UseInterceptors(UploadAudioInterceptor)
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } }
    }
  })
  async upload(@UploadedFile() file: Express.Multer.File) {
    return this.UploadAudioService.execute(file);
  }
}





