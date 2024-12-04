import { IsIn, IsInt, IsNotEmpty, IsPositive, IsString, Length } from "class-validator";

export class CreateToyDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 191)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['plastic', 'wood', 'steel', 'other'])
  material: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  weight: number;
}
