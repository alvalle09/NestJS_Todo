import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable() 
export class TodoService {
    private storage: Todo[] = [{"id": 111, label: '123', complete: false}];

    create(todo: Todo): void {
        const currentMaxId = Math.max(...this.storage.map((t: Todo) => t.id));
        todo.id = currentMaxId > 0 ? currentMaxId + 1 : 0;
        this.storage.push(todo);
    }

    findAll(): Todo[] {
        return this.storage;
    }

}