import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Delete, Pencil, Save, X } from "lucide-react";
import { Input } from "../ui/input";
import type { Todo } from "../../types/todo";

interface TodoTitleProps {
  todo: Todo;
  updateTodo: (id: number, updates: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
}

export const TodoTitle = ({ todo, updateTodo, deleteTodo }: TodoTitleProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggleComplete = () => {
    updateTodo(todo.id, { completed: !todo.completed });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (!trimmedText) {
      window.dispatchEvent(
        new CustomEvent("todoError", { detail: "Cannot save empty todo" })
      );
      setEditText(todo.text);
      setIsEditing(false);
      return;
    }
    updateTodo(todo.id, { text: trimmedText });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="flex border-b justify-between cursor-grab p-2 sm:p-3">
      <div className="flex items-center gap-1 sm:gap-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleToggleComplete}
          onPointerDown={(e) => e.stopPropagation()}
        />

        {isEditing ? (
          <Input
            type="text"
            value={editText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditText(e.target.value)
            }
            className="text-sm sm:text-base"
          />
        ) : (
          <h3
            className="font-medium text-sm sm:text-base"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              textDecorationColor: todo.completed
                ? "oklch(64.5% 0.246 16.439)"
                : "inherit",
            }}
          >
            {todo.text}
          </h3>
        )}
      </div>
      <div className="flex gap-2 sm:gap-3 items-center">
        {isEditing ? (
          <>
            <Save size={14} cursor="pointer" onClick={handleSave} />
            <X size={14} cursor="pointer" onClick={handleCancel} />
          </>
        ) : (
          <>
            <Pencil size={14} cursor="pointer" onClick={handleEdit} />
            <Delete size={14} cursor="pointer" onClick={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
};
