import {
    IsNumber,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,

  } from 'class-validator';
  
  export class CreateBankBranchesDto {
    
    
    @IsOptional()
    @IsNumber()
    id?: number;

    @IsNumber()
    @IsNotEmpty()
    id_bank: number;
  
    @IsNumber()
    @IsNotEmpty()
    latitude: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    length: string;



  }
