import { Global, Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { SupaBaseProvider } from './supabase-provider';

@Global()
@Module({
  providers: [SupabaseService, SupaBaseProvider],
  exports: [SupabaseService]
})
export class SupabaseModule { }
