import { removeTodo, toggleTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function TodoItem({ todo, index }) {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center justify-between w-full">
        <span className="mr-4 text-gray-600">{index + 1}</span>
        <span
          onClick={() => dispatch(toggleTodo(todo.id))}
          className={`mr-4 text-gray-600 w-9/12 cursor-pointer ${
            todo.completed && "line-through"
          }`}
        >
          {todo.text}
        </span>
        <span
          onClick={() => dispatch(removeTodo(todo.id))}
          className="mr-4 bg-red-500 text-white p-2 cursor-pointer"
        >
          Delete
        </span>
      </div>
    </li>
  );
}
