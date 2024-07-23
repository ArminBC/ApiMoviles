import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from 'src/banks/entities/bank.entity';
import { BanksService } from 'src/banks/banks.service';
import { BankBranchesController } from 'src/bank_branches/bankbranches.controller';
import { BankBranchesService } from 'src/bank_branches/bankbranches.service';
import { BankBranches } from 'src/bank_branches/entities/bankbranches.entities';

@Module({
  imports: [TypeOrmModule.forFeature([BankBranches, Bank])],
  controllers: [BankBranchesController],
  providers: [BankBranchesService, BanksService],
  exports: [BankBranchesService],
})
export class BankBranchesModule {}