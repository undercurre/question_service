import { Expose } from 'class-transformer';

export class QuestionDto {
  @Expose()
  id: string;
  @Expose()
  content: string;
  @Expose()
  answer: string;
}
