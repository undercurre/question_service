import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAnswer } from '../entity/user-answer.entity';
import { UserAnswerService } from './answer.service';
import { UserAnswerController } from './answer.controller';
import { User } from '../entity/user.entity';
import { Question } from '../entity/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAnswer, User, Question])],
  providers: [UserAnswerService],
  controllers: [UserAnswerController],
})
export class UserAnswerModule {}
