import "./App.css";
import { InputField } from "./components/custom/InputField";
import { TodoDisplay } from "./components/custom/TodoDisplay";

export default function App() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 underlined">Todo App.</h1>
      <InputField />
      <TodoDisplay />
    </div>
  );
}