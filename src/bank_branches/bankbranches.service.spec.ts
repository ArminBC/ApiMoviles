import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { BanksService } from '../banks/banks.service';
import { BankBranchesService } from './bankbranches.service';
import { BankBranches } from './entities/bankbranches.entities';

describe('BankBranchesService', () => {
  let service: BankBranchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BankBranchesService,
        {
          provide: getRepositoryToken(BankBranches),
          useValue: {}, // Aquí puedes proporcionar un mock de tu repositorio si es necesario
        },
        BanksService,
      ],
    }).compile();

    service = module.get<BankBranchesService>(BankBranchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});