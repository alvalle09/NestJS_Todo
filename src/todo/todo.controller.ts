// todo.controller.ts
import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

  private readonly logger = new Logger(TodoController.name);

  // dependency injection
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() todo: Todo): void {
    this.logger.log('Handling create() request...');
    return this.todoService.create(todo);
  }

  @Get()
  findAll(): Todo[] {
    this.logger.log('Handling findAll() request...');
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Todo {
    this.logger.log('Handling findOne() request with id=' + id + '....');
    return this.todoService.findOne(id);
  }

  @Put(':id'_)
  update(@Param('id', ParseIntPipe) id: number, @Body() todo: Todo): void {
    this.logger.log('Handling update() request with id= ' + id + '...');
    return this.todoService.update(id, todo);
  }
}
