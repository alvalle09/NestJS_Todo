// todo.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    // dependency injection
    constructor(private readonly todoService: TodoService) {}

    @Post() 
    create(@Body() todo: Todo): void {
        return this.todoService.create(todo);
    }

    @Get()
    findAll(): Todo[] {
        return this.todoService.findAll();
    }
}