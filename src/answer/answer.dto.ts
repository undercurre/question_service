import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  questionId: string;

  @IsNotEmpty()
  @IsNumber()
  score: number;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateAnswerDto {
  @IsNotEmpty()
  @IsNumber()
  score: number;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  description?: string;
}
