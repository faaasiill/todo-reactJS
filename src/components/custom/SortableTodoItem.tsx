import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TodoTitle } from "./TodoTitle";
import type { Todo } from "../../types/todo";
import { useMemo } from "react";

interface SortableTodoItemProps {
  todo: Todo;
  updateTodo: (id: number, updates: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
}

export const SortableTodoItem = ({
  todo,
  updateTodo,
  deleteTodo,
}: SortableTodoItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = useMemo(
    () => ({
      transform: CSS.Transform.toString(transform),
      transition,
    }),
    [transform, transition]
  );

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <TodoTitle
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
};
