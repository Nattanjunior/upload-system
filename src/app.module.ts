import { Module } from '@nestjs/common';
import { ModuleModule } from './module/module.module';
import { SupabaseModule } from './libs/supabase/supabase.module';


@Module({
  imports: [ModuleModule, SupabaseModule]
})
export class AppModule { }
