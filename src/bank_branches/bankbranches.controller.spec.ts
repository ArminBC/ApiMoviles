import { Test, TestingModule } from '@nestjs/testing';
import { BanksService } from '../banks/banks.service';
import { BankBranchesController } from './bankbranches.controller';
import { BankBranchesService } from './bankbranches.service';

describe('BankBranchesController', () => {
  let controller: BankBranchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankBranchesController],
      providers: [BankBranchesService, BanksService],
    }).compile();

    controller = module.get<BankBranchesController>(BankBranchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});