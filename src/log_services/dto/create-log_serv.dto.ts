import {
    IsNumber,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
  } from 'class-validator';
  
  export class CreateLogServiceDto {
    @IsNumber()
    @IsOptional()
    id?: number;
  
    @IsNumber()
    @IsNotEmpty()
    id_services: number;
  
    @IsNumber()
    @IsNotEmpty()
    id_user: number;
  
    @IsNumber()
    @IsNotEmpty()
    id_account: number;
  
    @IsNumber()
    @IsNotEmpty()
    amount: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    reference: string;
  }