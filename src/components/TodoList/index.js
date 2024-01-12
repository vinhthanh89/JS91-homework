import { useState , } from "react";
import "./style.css";

import TodoItem from "../TodoItem";
import TODOS from "../../Data/todos";
import AddTodo from "../AddTodo";
import Header from "../Header";

const TodoList = () => {
  const [todos, setTodos] = useState(TODOS);

  const handleEditTask = (taskId, param) => {
    setTodos((prevTodos) =>
      prevTodos.map((taskItem) =>
        taskItem.id === taskId ? { ...taskItem, task: param } : taskItem
      )
    );
  };

  const handleIsEdited = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.map((taskItem) =>
        taskItem.id === taskId
          ? { ...taskItem, isEdited: !taskItem.isEdited }
          : taskItem
      )
    );
  };

  const handleIsComplete = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.map((taskItem) =>
        taskItem.id === taskId
          ? { ...taskItem, isCompleted: !taskItem.isCompleted }
          : taskItem
      )
    );
  };

  const hanleDelete = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.filter((taskItem) => taskItem.id !== taskId)
    );
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const renderTodoList = todos.map((todo) => {
    return (
      <div className="task__container" key={todo.id}>
        <TodoItem
          todo={todo}
          handleIsComplete={handleIsComplete}
          handleIsEdited={handleIsEdited}
          hanleDelete={hanleDelete}
          handleEditTask={handleEditTask}
        />
      </div>
    );
  });

  return (
      <div className="todo-list__container">
        <Header />
        <div className="todo-list">{renderTodoList}</div>
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>
  );
};

export default TodoList;
