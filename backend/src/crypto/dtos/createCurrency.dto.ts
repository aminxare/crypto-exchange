import { IsEmail, IsOptional, IsString } from 'class-validator';

export default class CreateCurrenyDto {
  @IsString()
  public name: string;

  @IsEmail()
  public email: string;

  @IsString()
  @IsOptional()
  public description: string;
}
