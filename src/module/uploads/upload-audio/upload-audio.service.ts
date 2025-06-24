import { HttpException, HttpStatus, Injectable, UploadedFile } from '@nestjs/common';
import path from 'node:path';

@Injectable()
export class UploadAudioService {
  async execute(file: Express.Multer.File) {
    const extname = path.extname(file.originalname);

    if (extname !== '.mp3') {
      throw new HttpException('Arquivo .MP3 invalido', HttpStatus.BAD_REQUEST)
    }
  }
}
