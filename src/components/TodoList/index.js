import { useState } from "react";
import "./style.css";
import { PlusCircleFill } from "react-bootstrap-icons";
import TodoItem from "../TodoItem";
import TODOS from "../../Data/todos";

const TodoList = () => {
  const [todos, setTodos] = useState(TODOS);
  const handleIsComplete = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.map((taskItem) =>
        taskItem.id === taskId ? { ...taskItem, isCompleted: !taskItem.isCompleted } : taskItem
      )
    );
  }
  const hanleDelete = (taskId) => {
    setTodos((prevTodos) => 
      prevTodos.filter(taskItem => taskItem.id !== taskId)
      );
  };

  const todoList = todos.map((item) => {
    return (
      <div key={item.id}>
        {
          <TodoItem
            id={item.id}
            task={item.task}
            isCompleted={item.isCompleted}
            handleIsComplete={handleIsComplete}
            hanleDelete={hanleDelete}
          />
        }
      </div>
    );
  });

  return (
    <div className="todo-task">
      <div className="todo-list">
      {todoList}
      </div>
      <button className="add-button">
        <span className="icon">
          <PlusCircleFill />
        </span>
        <span>Add Task</span>
      </button>
    </div>
  );
};

export default TodoList;
