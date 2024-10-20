import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserAnswerService } from './answer.service';
import { UserAnswerDto } from '../dto/answer.dto';
import { UserAnswer } from 'src/entity/user-answer.entity';

@Controller('user-answers')
export class UserAnswerController {
  constructor(private readonly userAnswerService: UserAnswerService) {}

  @Get()
  findAll(): Promise<UserAnswerDto[]> {
    return this.userAnswerService.findAll();
  }

  @Get('user/:userId')
  async findAllByUserId(
    @Param('userId') userId: string,
  ): Promise<UserAnswerDto[]> {
    return this.userAnswerService.findAllByUserId(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserAnswerDto> {
    return this.userAnswerService.findOne(id);
  }

  @Post()
  create(@Body() userAnswer: Partial<UserAnswer>): Promise<UserAnswerDto> {
    return this.userAnswerService.create(userAnswer);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() userAnswer: Partial<UserAnswer>,
  ): Promise<UserAnswerDto> {
    return this.userAnswerService.update(id, userAnswer);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userAnswerService.remove(id);
  }
}
