import { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/tasks/CreateTask";
import TaskList from "./components/tasks/TaskList";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import { todoApi } from "./api-axios/api";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {
  // const [tasks, setTask] = useState([]);

  // console.log(import.meta.env.VITE_BASE_URL);

  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/tasks`,
    fetcher
  );

  const { mutate } = useSWRConfig();

  const addTask = async (newTask) => {
    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(newTask),
    // });
    // const data = await res.json();

    // await axios.post("http://localhost:5000/tasks", newTask, {
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });

    await todoApi.post("/", newTask);

    // todo: revalidation
    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);

    // setTask([...tasks, newTask]);
  };

  const removeTask = async (id) => {
    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "DELETE",
    // });

    // await axios.delete(`http://localhost:5000/tasks/${id}`);

    await todoApi.delete(`/${id}`);

    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);
    // setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async (id, currentState) => {
    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ isDone: !currentState }),
    // });

    // await axios.patch(
    //   `http://localhost:5000/tasks/${id}`,
    //   {
    //     isDone: !currentState,
    //   },
    //   {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   }
    // );

    await todoApi.patch(`/${id}`, { isDone: !currentState });

    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);
    // setTask(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, isDone: !task.isDone } : task
    //   )
    // );
  };

  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} isLoading={isLoading} />
      {/* {isLoading ? (
        <p className="text-center text-2xl text-gray-600 font-bold animate-pulse">
          Loading...
        </p>
      ) : (
        <TaskList tasks={data} removeTask={removeTask} doneTask={doneTask} />
      )} */}
      <TaskList
        tasks={data}
        removeTask={removeTask}
        doneTask={doneTask}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
