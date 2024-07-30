import { PartialType } from '@nestjs/mapped-types';
import { CreateServicesDto } from './create-services.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateServicesDto extends PartialType(CreateServicesDto) {


    @IsString()
    @IsOptional()
    name?: string;
  
    @IsBoolean()
    @IsOptional()
    status?: boolean;
  
    @IsString()
    @IsOptional()
    icono?: string;
  }