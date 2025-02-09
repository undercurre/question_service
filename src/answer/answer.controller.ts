import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Request,
  Put,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto, UpdateAnswerDto } from './answer.dto';
import { Answer } from './answer.entity';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  async create(
    @Body() createAnswerDto: Omit<CreateAnswerDto, 'userId'>,
    @Request() req,
  ) {
    console.log(req.user);
    return this.answerService.create({
      userId: req.user.userId,
      ...createAnswerDto,
    });
  }

  @Get()
  async findAll(@Request() req) {
    return this.answerService.findAll(req.user.userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.answerService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() answer: UpdateAnswerDto,
  ): Promise<Answer> {
    return this.answerService.update(id, answer);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.answerService.remove(id);
  }
}
