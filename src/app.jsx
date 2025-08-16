
import React, { useState } from "react";
import "./app.css";
import TaskForm from "./components/TaskForm/task-form";
import TaskColumn from "./components/TaskColumn/task-column";
import ClosedIcon from "./assets/right-check-finale.png"

const App = () => {

  const [tasks, setTask] = useState([]);
  console.log(tasks);

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTask={setTask} />
      <main className="app_main">
        <TaskColumn title="Ready For Development" tasks={tasks} status="Ready For Development" />
        <TaskColumn title="Task In Progress" tasks={tasks} status="Task In Progress" />
        <TaskColumn title="Ready For Test" tasks={tasks} status="Ready For Test" />
        <TaskColumn title="Closed" icon={ClosedIcon} tasks={tasks} status="Closed"  />
      </main>
    </div>
  );
};

export default App;
