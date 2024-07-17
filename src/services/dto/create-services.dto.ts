import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class CreateServicesDto {
   
        @IsNumber()
        @IsOptional()
        id?: string;
      
        @IsString()
        @IsNotEmpty()
        @MaxLength(50)
        name: string;
      
        @IsOptional()
        @IsBoolean()
        status?: boolean;
      
  }
  