import { Test, TestingModule } from '@nestjs/testing';
import { SupabaseService } from './supabase.service';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { SupaBaseProvider } from './supabase-provider';


describe('SupabaseService', () => {
  let service: SupabaseService;

  const mockSupabaseProvider = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupabaseService, { provide: SupaBaseProvider.provide, useValue: mockSupabaseProvider }],
    }).compile();

    service = module.get<SupabaseService>(SupabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
