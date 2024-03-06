import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const filterTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "completed" && todo.completed) ||
        (filter === "incomplete" && !todo.completed) ||
        filter === "all";

      const todoText = todo.text.toLowerCase();
      const matchesSearch = todoText.includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  const completedTasks = useSelector(
    (state) => state.todos.filter((todo) => todo.completed).length
  );

  const uncompletedTasks = useSelector(
    (state) => state.todos.filter((todo) => !todo.completed).length
  );

  return (
    <div>
      <div className="flex mt-2 mb-4 gap-3">
        <h3 className="text-sm text-gray-600">Completed Tasks: {completedTasks}</h3>
        <h3 className="text-sm text-gray-600">Uncompleted Tasks: {uncompletedTasks}</h3>
      </div>

      <ul>
        <li className="my-2 text-md text-gray-600">Todo list</li>
        {filterTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
}
