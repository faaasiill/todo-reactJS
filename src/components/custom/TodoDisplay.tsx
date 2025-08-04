import { useState, useEffect } from "react";
import { TodoTitle } from "./TodoTitle";
import { loadTodos, saveTodos } from "../../utils/localStorage";
import type { Todo } from "../../types/todo";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import type { AlertState } from "../../types/alert";

export const TodoDisplay = () => {
  const [todos, setTodos] = useState<Todo[]>(loadTodos());
  const [alert, setAlert] = useState<AlertState>({ type: "success", message: "", visible: false });

  useEffect(() => {
    const handleTodoAdded = () => {
      setTodos(loadTodos());
      showAlert("success", "Todo added successfully");
    };
    const handleTodoError = (e: CustomEvent<string>) => {
      showAlert("error", e.detail);
    };
    window.addEventListener("todoAdded", handleTodoAdded);
    window.addEventListener("todoError", handleTodoError as EventListener);
    return () => {
      window.removeEventListener("todoAdded", handleTodoAdded);
      window.removeEventListener("todoError", handleTodoError as EventListener);
    };
  }, []);

  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(() => {
        setAlert({ type: "success", message: "", visible: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ type, message, visible: true });
  };

  const updateTodo = (id: number, updates: Partial<Todo>) => {
    try {
      const updatedTodos = todos.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      );
      setTodos(updatedTodos);
      saveTodos(updatedTodos);
      showAlert("success", "Todo updated successfully");
    } catch (error: unknown) {
      console.error("Failed to update todo:", error);
      showAlert("error", "Failed to update todo: Storage limit reached");
    }
  };

  const deleteTodo = (id: number) => {
    try {
      const updatedTodos = todos.filter((t) => t.id !== id);
      setTodos(updatedTodos);
      saveTodos(updatedTodos);
      showAlert("success", "Todo deleted successfully");
    } catch (error: unknown) {
      console.error("Failed to delete todo:", error);
      showAlert("error", "Failed to delete todo: Storage limit reached");
    }
  };

  return (
    <div className="my-6 sm:my-10 relative">
      {alert.visible && (
        <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 max-w-[80vw] sm:max-w-xs">
          <Alert
            variant={alert.type === "error" ? "destructive" : "default"}
            className={
              alert.type === "error"
                ? "bg-red-100 text-red-800 border-red-500"
                : "bg-green-100 text-green-800 border-green-500"
            }
          >
            {alert.type === "error" ? (
              <AlertCircleIcon />
            ) : (
              <CheckCircle2Icon />
            )}
            <AlertTitle>{alert.type === "error" ? "Error" : "Success"}</AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        </div>
      )}
      <div>
        {todos.map((todo) => (
          <TodoTitle
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};