import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './answer.entity';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { User } from '../users/user.entity';
import { Question } from '../question/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Answer, User, Question])],
  providers: [AnswerService],
  controllers: [AnswerController],
})
export class AnswerModule {}
