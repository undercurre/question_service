import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Request,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './answer.dto';

@Controller('daily-expenses')
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
  async findAll(@Query('userId') userId: string) {
    return this.answerService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.answerService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.answerService.remove(id);
  }
}
