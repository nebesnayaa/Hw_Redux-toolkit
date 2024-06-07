import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { getTodos, postTodos } from "../../slices/todos/todos-slice";
import { v4 } from "uuid";
import { TodoType } from "../../types/todo-type";
import TodoList from "./TodoList";

const InputTodo = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<TodoType>({
    id: v4(),
    title: "",
    isCompleted: true,
  });

  const addTodoHandler = () => {
    try {
      const newTodo = {
        ...todo,
        id: v4(),
        isCompleted: true,
      };
      dispatch(postTodos(newTodo));
      setTodo((prevState) => ({
        ...prevState,
        title: "",
      }));
    } catch (error) {
      console.log("Error in adding the todo");
    }
  };

  return (
    <div className="input-field col s6">
      <input
        id="title"
        type="text"
        className="validate"
        onChange={(e: any) => {
          setTodo((prevState) => ({
            ...prevState,
            title: e.target.value,
          }));
        }}
        value={todo.title}
      />
      <label htmlFor="title">Todo Title</label>
      <a
        className="waves-effect waves-light btn-large"
        onClick={todo.title.length > 0 ? addTodoHandler : () => {}}
      >
        <i className="material-icons left">chevron_right</i>Add
      </a>
      <a
        className="waves-effect waves-light btn-large"
        onClick={() => dispatch<any>(getTodos())}
      >
        <i className="material-icons left">chevron_right</i>Get Todos From Server
      </a>
      <TodoList />
    </div>
  );
};

export default InputTodo;