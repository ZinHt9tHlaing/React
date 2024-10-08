import { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/tasks/CreateTask";
import TaskList from "./components/tasks/TaskList";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, task: "Complete JavaScript assignment", isDone: false },
    { id: 2, task: "Prepare for meeting with client", isDone: false },
    { id: 3, task: "Update project documentation", isDone: true },
    { id: 4, task: "Review code for new feature", isDone: false },
    { id: 5, task: "Plan team-building activity", isDone: true },
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
    </div>
  );
};

export default App;
