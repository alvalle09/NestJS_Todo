// todo.controller.ts
import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    // dependency injection
    constructor(private readonly todoService: TodoService) {}

    
}