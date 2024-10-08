import { useState } from "react";
import { tailspin } from "ldrs";

const CreateTask = ({ addTask, isLoading }) => {
  const [job, setJob] = useState("");

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  tailspin.register();

  const handleAddTaskBtn = () => {
    if (job.trim()) {
      const newTask = {
        task: job,
        isDone: false,
      };
      addTask(newTask);
      setJob("");
    } else {
      alert("Please fill task.");
    }
  };

  return (
    <div className="flex mb-5">
      <input
        type="text"
        value={job}
        onChange={handleOnChange}
        placeholder="Write your new task"
        className=" flex-grow disabled:bg-gray-200 disabled:cursor-not-allowed bg-slate-100 border-2 border-slate-300 rounded-l-lg p-2 focus-visible:outline-none focus:border-[3px] focus:border-slate-300"
        disabled={isLoading}
      />
      <button
        onClick={handleAddTaskBtn}
        disabled={isLoading}
        className="bg-slate-300 border-2 border-slate-300 rounded-r-lg py-2 px-2 active:scale-95 duration-200"
      >
        {isLoading ? (
          <l-tailspin
            size="20"
            stroke="5"
            speed="0.9"
            color="black"
            className="text-red-700"
          ></l-tailspin>
        ) : (
          "Add Task"
        )}
      </button>
    </div>
  );
};

export default CreateTask;
