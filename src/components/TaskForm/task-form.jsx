import "./task-form.css";
import Tag from "../Tag/Tag";
import { useState } from "react";

const TaskForm = () => {
    const [task , setTask] = useState("");
    const [status , setStatus] = useState("");

    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }
    
    console.log(status);
    console.log(task)
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          placeholder="Enter Class Details"
          className="task_input"
          onChange={handleTask}
        />

        <div className="task_form_bottom">
          <div>
            <Tag tagName="DEV" />
            <Tag tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>
          <div>
            <select className="task_status" onChange={handleStatusChange}>
              <option value="Ready For Development">
                Ready For Development
              </option>
              <option value="Task In Progress">Task In Progress</option>
              <option value="Ready For Test">Ready For Test</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" className="task_submit">
              +Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
