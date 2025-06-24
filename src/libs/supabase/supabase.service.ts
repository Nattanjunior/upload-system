import { Inject, Injectable } from '@nestjs/common';
import type { SupabaseClient } from '@supabase/supabase-js';
import { SupaBaseProvider } from './supabase-provider';

// Tipo para upload de arquivos
export type UploadFile = {
  contentType: 'audio/mpeg';
  bucketName: string;
  fileName: string;
  file: Buffer;
};

@Injectable()
export class SupabaseService {

  constructor(
    @Inject(SupaBaseProvider.provide)
    private readonly supabaseProvider: SupabaseClient<any, 'public', any>
  ) { }

  async uploadFile({ bucketName, contentType, file, fileName }: UploadFile) {
    const data = await this.supabaseProvider.storage
      .from(bucketName)
      .upload(fileName, file, { upsert: true, contentType });
    return data;
  }
}
