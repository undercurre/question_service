import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { Question } from 'src/question/question.entity';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string; // 消费记录ID，使用 UUID

  @ManyToOne(() => User, (user) => user.answer, { onDelete: 'CASCADE' })
  user: User; // 关联的用户，设置为多对一关系

  @ManyToOne(() => Question, (question) => question.answer, {
    onDelete: 'CASCADE',
  })
  question: Question; // 关联的用户，设置为多对一关系

  @Column('int', { nullable: false })
  score: number; // 回答得分

  @Column({ type: 'varchar', length: 255, nullable: true })
  description?: string; // 回答反思描述

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date; // 记录创建时间，自动生成
}
