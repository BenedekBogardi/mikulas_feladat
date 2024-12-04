import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateChildDto {
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

