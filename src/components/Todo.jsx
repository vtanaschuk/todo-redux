import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import Filter from "./Filter";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const minChar = 3;
  const maxChar = 20;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (newTodo.length < minChar || newTodo.length > maxChar) {
      setError(
        `Todo should be at least ${minChar} characters long and not exceed ${maxChar} characters.`
      );
      return;
    }
    setError("");
    const id = uuid();
    dispatch(addTodo({ id, text: newTodo }));
    setNewTodo("");
  };

  const handleSearch = () => {
    dispatch(updateSearchTerm(search));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase text-gray-600">
        Todo app
      </h2>
      <div className="flex items-center mb-4">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600"
        />
        <button
          className="ml-4 p-2 bg-gray-300 text-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none"
          onClick={handleAddItem}
        >
          Add Todo
        </button>
      </div>
      {error && <div className="text-red-600">{error}</div>}
      <div className="flex items-center justify-between">
        <Filter />
        <div className="flex items-center mb-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-600"
          />
          <button
            className="ml-4 p-2 bg-gray-300 text-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
}
