import {
    IsNumber,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    
  } from 'class-validator';
  
  export class CreateLogServiceDto {
    
    
    @IsNumber()
    @IsNotEmpty()
    id_service: number;

    @IsNumber()
    @IsNotEmpty()
    id_users: number;

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