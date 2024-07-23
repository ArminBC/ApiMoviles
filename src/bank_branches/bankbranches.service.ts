import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BanksService } from 'src/banks/banks.service';
import { BankBranches } from './entities/bankbranches.entities';
import { CreateBankBranchesDto } from './dto/create-bank_branches.dto';

@Injectable()
export class BankBranchesService {
  constructor(
    @InjectRepository(BankBranches)
    private bankBranchesRepository: Repository<BankBranches>,
    @Inject(BanksService)
    private readonly banksService: BanksService,
  ) {}

  async create(createBankBranchDto: CreateBankBranchesDto): Promise<BankBranches> {
    // Ensure the referenced bank exists
    const bank = await this.banksService.findOne(createBankBranchDto.id_bank);
    if (!bank) {
      throw new Error('Referenced bank not found');
    }

    const newBankBranch = this.bankBranchesRepository.create(createBankBranchDto);
    return this.bankBranchesRepository.save(newBankBranch);
  }

  async findAll(): Promise<BankBranches[]> {
    return this.bankBranchesRepository.find({ relations: ['bank'] });
  }

  async findOneById(id: number): Promise<BankBranches> {
    return this.bankBranchesRepository.findOne({ where: { id }, relations: ['bank'] });
  }

  async update(id: number, updateBankBranchDto: CreateBankBranchesDto): Promise<void> {
    const bankBranch = await this.findOneById(id);
    if (!bankBranch) {
      throw new Error('Bank branch not found');
    }

    // Ensure the referenced bank exists
    const bank = await this.banksService.findOne(updateBankBranchDto.id_bank);
    if (!bank) {
      throw new Error('Referenced bank not found');
    }

    await this.bankBranchesRepository.update({ id }, updateBankBranchDto);
  }

  async remove(id: number): Promise<void> {
    const bankBranch = await this.findOneById(id);
    if (!bankBranch) {
      throw new Error('Bank branch not found');
    }

    await this.bankBranchesRepository.delete(id);
  }
}