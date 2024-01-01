import { CheckCircleFill, XCircleFill } from "react-bootstrap-icons";
import "./style.css";

const TodoItem = (props) => {
  const hanleClick = () => {
    props.handleIsComplete(props.id);
    console.log(props);
  }
  
  const hanleRemoveTask = () => {
    props.hanleDelete(props.id);
  }

  return (
    <div className="task-item">
      <div className="task">
        <div onClick={hanleClick} className={`${props.isCompleted ? "complete" : "uncomplete"}`}>
          <CheckCircleFill />
        </div>
        <div className={`${props.isCompleted ? "finish" : "unfinish"}`}>
          <span>{props.task}</span>
        </div>
      </div>
      <div onClick={hanleRemoveTask} className="edit-item">
        <div className="edit-button">
          <XCircleFill />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
