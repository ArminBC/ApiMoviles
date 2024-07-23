import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Request,
  } from '@nestjs/common';
import { BankBranchesService } from './bankbranches.service';
import { BankBranches } from './entities/bankbranches.entities';
import { CreateBankBranchesDto } from './dto/create-bank_branches.dto';
 
  
  @Controller('bank-branches')
  export class BankBranchesController {
    constructor(private readonly bankBranchesService: BankBranchesService) {}
  
  
    @Post()
    async create(@Body() createBankBranchesDto: CreateBankBranchesDto) {
      let result: CreateBankBranchesDto;
      try {
        result = await this.bankBranchesService.create(createBankBranchesDto);
      } catch (err) {
        console.log(err);
        return { status: 'ERROR 666', message: err.message, errors: [] };
      }
      console.info(`Bank branch created with ID Bank${result.id}!`);
      return { status: 'Success', data: result };
    }
     
    @Get()
    async findAll() {
      let result: BankBranches[];
      try {
        result = await this.bankBranchesService.findAll();
      } catch (err) {
        console.log(err);
        return { status: 'ERROR 666', message: 'Error retrieving bank branches' };
      }
      return { status: 'Success', data: result };
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number) {
      let result: BankBranches;
      try {
        result = await this.bankBranchesService.findOneById(id);
      } catch (err) {
       
        return { status: 'ERROR 666', message: 'Error retrieving ' };
      }
      return { status: 'Success', data: result };
    }

}