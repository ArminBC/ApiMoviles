import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateContactDto {
    @IsOptional()
    @IsNumber()
    id?: number;

    @IsOptional()
    @IsNumber()
    id_user: number;

    @IsString()
    @IsNotEmpty()
    nickname: string;

    @IsNotEmpty()
    @IsString()
    account: string;
}
