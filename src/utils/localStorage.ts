import type { Todo } from "@/types/todo";

const STORAGE_KEY = "vite-todo-list";

export function saveTodos(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function loadTodos(): Todo[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw
    ? JSON.parse(raw, (key, value) =>
        key === "createdAt" ? new Date(value) : value
      )
    : [];
}
