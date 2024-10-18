import { Expose, Type } from 'class-transformer';
import { UserDto } from '../dto/user.dto';
import { Question } from '../entity/question.entity';
import { QuestionDto } from './question.dto';

export class UserAnswerDto {
  @Expose()
  id: string;
  @Expose()
  @Type(() => UserDto)
  user: UserDto;
  @Expose()
  @Type(() => QuestionDto)
  question: Question;
  @Expose()
  userAnswer: string;
  @Expose()
  score: number;
  @Expose()
  answeredAt: Date;
}
