import { Answer } from 'src/answer/answer.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Answer, (answer) => answer.question)
  answer: Answer;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text' })
  standard: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
