import { useContext } from "react";
import { useState } from "react";
import TaskContext from "../../context/TaskContext";

const CreateTask = () => {
  const { addTask } = useContext(TaskContext);
  const [job, setJob] = useState("");

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    const newTask = {
      id: Date.now(),
      task: job,
      isDone: false,
    };
    addTask(newTask);
    setJob("");
  };

  return (
    <div className="flex mb-5">
      <input
        type="text"
        value={job}
        onChange={handleOnChange}
        placeholder="Write your new task"
        className=" flex-grow bg-slate-100 border-2 border-slate-300 rounded-l-lg p-2 focus-visible:outline-none focus:border-[3px] focus:border-slate-300 focus:shadow"
      />
      <button
        onClick={handleAddTaskBtn}
        className="bg-slate-300 border-2 border-slate-300 rounded-r-lg py-2 px-2 active:scale-95 duration-200"
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
