import "./task-form.css";
import Tag from "../Tag/Tag";
import { useState } from "react";

const TaskForm = ({ setTask }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready for Development",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: "",
      status: "Ready for Development",
      tags: [],
    });
  };

  const selectedTag = (tag) => {
    setTaskData((prev) => {
      const isSelected = prev.tags.includes(tag);
      const tags = isSelected
        ? prev.tags.filter((item) => item !== tag)
        : [...prev.tags, tag];

      return { ...prev, tags };
    });
  };

  console.log(taskData);

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          placeholder="Enter Class Details"
          className="task_input"
          onChange={handleChange}
        />

        <div className="task_form_bottom">
          <div>
            <Tag
              tagName="DEV"
              selectedTag={selectedTag}
              selected={checkTag("DEV")}
            />

            <Tag
              tagName="QA"
              selectedTag={selectedTag}
              selected={checkTag("QA")}
            />

            <Tag
              tagName="Product Owner"
              selectedTag={selectedTag}
              selected={checkTag("Product Owner")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
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
