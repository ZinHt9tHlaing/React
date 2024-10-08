import { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/tasks/CreateTask";
import TaskList from "./components/tasks/TaskList";
import { useEffect } from "react";
import SkeletonLoader from "./components/SkeletonLoader";

const App = () => {
  const [tasks, setTask] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);

  const addTask = async (newTask) => {
    setSendLoading(true);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();
    // console.log(data);

    // setTask([...tasks, data]);
    fetchTask(); // revalidation

    setSendLoading(false);
  };

  const removeTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    // const data = await res.text();
    // console.log(data);

    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async (id, currentState) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ isDone: !currentState }),
    });
    const data = await res.json();
    // console.log(data);

    // setTask(tasks.map((el) => (el.id === id ? data : el)));
    fetchTask();
  };

  const fetchTask = async () => {
    setTaskLoading(true);
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTask(data);
    setTaskLoading(false);
  };

  useEffect(() => {
    // console.log("hello");
    fetchTask();
  }, []);

  return (
    <div className="p-10">
      <Heading />
      <CreateTask sendLoading={sendLoading} addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
      {taskLoading ? <SkeletonLoader /> : null}
    </div>
  );
};

export default App;
