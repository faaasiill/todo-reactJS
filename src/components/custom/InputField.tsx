import { useState, type FormEvent } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import type { Todo } from "../../types/todo";
import { loadTodos, saveTodos } from "../../utils/localStorage";

export const InputField = () => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) {
      window.dispatchEvent(new CustomEvent("todoError", { detail: "Cannot add empty todo" }));
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
      createdAt: new Date(),
    };

    try {
      const existingTodos = loadTodos();
      const updatedTodos = [...existingTodos, newTodo]; // Append new todo at the end
      saveTodos(updatedTodos);
      setText("");
      window.dispatchEvent(new Event("todoAdded"));
    } catch (error: unknown) {
      console.error("Failed to save todo:", error);
      window.dispatchEvent(new CustomEvent("todoError", { detail: "Failed to add todo: Storage limit reached" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 gap-1 mt-20">
      <Input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <Button type="submit" className="text-xs font-medium">
        Add Todo
      </Button>
    </form>
  );
};
