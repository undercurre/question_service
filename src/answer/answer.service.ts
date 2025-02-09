import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';
import { CreateAnswerDto } from './answer.dto';
import { Question } from 'src/question/question.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    // 查找 User 实体
    const user = await this.userRepository.findOne({
      where: { id: createAnswerDto.userId },
    });
    if (!user) {
      throw new Error('User not found');
    }
    // 查找 Question 实体
    const question = await this.questionRepository.findOne({
      where: { id: createAnswerDto.questionId },
    });
    if (!user) {
      throw new Error('Question not found');
    }

    const answer = this.answerRepository.create({
      ...createAnswerDto,
      user,
      question,
    });
    return this.answerRepository.save(answer);
  }

  async findAll(userId: string): Promise<Answer[]> {
    return this.answerRepository.find({
      where: { user: { id: userId } },
    });
  }

  async findOne(id: string): Promise<Answer> {
    const expense = await this.answerRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!expense) {
      throw new NotFoundException(`Daily expense with ID "${id}" not found.`);
    }
    return expense;
  }

  async update(id: string, answer: Partial<Answer>): Promise<Answer> {
    await this.answerRepository.update(id, answer);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const result = await this.answerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Daily expense with ID "${id}" not found.`);
    }
  }
}
