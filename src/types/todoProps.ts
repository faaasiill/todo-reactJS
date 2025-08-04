import type { Todo } from "./todo";

export interface TodoTitleProps {
    todo: Todo;
    updateTodo: (id: number, update: Partial<Todo>) => void;
    deleteTodo: (id: number) => void;
}