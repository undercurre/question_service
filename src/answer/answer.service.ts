import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAnswer } from '../entity/user-answer.entity';
import { UserAnswerDto } from '../dto/answer.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserAnswerService {
  constructor(
    @InjectRepository(UserAnswer)
    private userAnswerRepository: Repository<UserAnswer>,
  ) {}

  async findAll(): Promise<UserAnswerDto[]> {
    const userAnswers = await this.userAnswerRepository.find({
      relations: ['user', 'question'],
    });
    return userAnswers.map((userAnswer) =>
      plainToInstance(UserAnswerDto, userAnswer, {
        excludeExtraneousValues: true,
      }),
    );
  }

  async findOne(id: string): Promise<UserAnswerDto> {
    const userAnswer = await this.userAnswerRepository.findOne({
      where: { id },
      relations: ['user', 'question'],
    });
    return plainToInstance(UserAnswerDto, userAnswer, {
      excludeExtraneousValues: true,
    });
  }

  async create(userAnswer: Partial<UserAnswer>): Promise<UserAnswerDto> {
    const newUserAnswer = this.userAnswerRepository.create(userAnswer);
    const savedUserAnswer = await this.userAnswerRepository.save(newUserAnswer);
    return plainToInstance(UserAnswerDto, savedUserAnswer, {
      excludeExtraneousValues: true,
    });
  }

  async update(
    id: string,
    userAnswer: Partial<UserAnswer>,
  ): Promise<UserAnswerDto> {
    await this.userAnswerRepository.update(id, userAnswer);
    const updatedUserAnswer = await this.findOne(id);
    return plainToInstance(UserAnswerDto, updatedUserAnswer, {
      excludeExtraneousValues: true,
    });
  }

  async remove(id: string): Promise<void> {
    await this.userAnswerRepository.delete(id);
  }
}
