import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Question> {
    return this.questionService.findOne(id);
  }

  @Post()
  create(@Body() question: Partial<Question>): Promise<Question> {
    return this.questionService.create(question);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() question: Partial<Question>,
  ): Promise<Question> {
    return this.questionService.update(id, question);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.questionService.remove(id);
  }
}
