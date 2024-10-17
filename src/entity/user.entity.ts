import {
  Entity,
  Column,
  CreateDateColumn,
  BeforeInsert,
  UpdateDateColumn,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
import SnowflakeId from 'snowflake-id';
import { UserAnswer } from './user-answer.entity';

const snowflake = new SnowflakeId({
  mid: 42,
  offset: (2020 - 1970) * 31536000 * 1000,
});

@Entity('users')
export class User {
  @PrimaryColumn({ type: 'char', length: 20 })
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, nullable: true })
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => UserAnswer, (userAnswer) => userAnswer.user)
  userAnswers: UserAnswer[];

  @BeforeInsert()
  generateId() {
    this.id = snowflake.generate().toString();
  }
}
