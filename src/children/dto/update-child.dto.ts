import { PartialType } from '@nestjs/mapped-types';
import { CreateChildDto } from './create-child.dto';
import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateChildDto extends PartialType(CreateChildDto) {
  @IsNotEmpty()
  @IsString()
  @Length(1, 191)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 150)
  address: string;

  @IsNotEmpty()
  @IsBoolean()
  wasGood: boolean;
}
