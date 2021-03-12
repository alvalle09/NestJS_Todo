// todo.controller.ts
import { Controller, Get } from '@nestjs/common';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    // dependency injection
    constructor(private readonly todoService: TodoService) {}

    @Get()
    findAll(): Todo[] {
        return [];
    }
}