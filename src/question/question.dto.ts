import { IsString, IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  standard: string;
}

export class UpdateQuestionDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  standard: string;
}
