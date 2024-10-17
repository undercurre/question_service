import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity'; // 导入 User 实体
import { Question } from './question.entity'; // 导入 Question 实体

@Entity('user_answers')
export class UserAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userAnswers)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Question, (question) => question.id)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @Column('text')
  userAnswer: string;

  @Column('int')
  score: number;

  @CreateDateColumn({ type: 'datetime' })
  answeredAt: Date;
}
