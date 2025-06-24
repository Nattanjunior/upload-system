import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { SupaBaseProvider } from './supabase-provider';

@Module({
  providers: [SupabaseService, SupaBaseProvider]
})
export class SupabaseModule { }
