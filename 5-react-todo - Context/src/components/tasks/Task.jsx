import { useContext } from "react";
import TaskContext from "../../context/TaskContext";

const Task = ({ job: { id, task, isDone } }) => {
  const { removeTask, doneTask } = useContext(TaskContext);

  const handleRemoveTaskBtn = () => {
    if (confirm("Are you sure?")) {
      removeTask(id);
    }
  };

  const handleOnChange = () => {
    doneTask(id);
  };

  return (
    <div className=" flex justify-between items-center border-2 border-slate-300 p-3 rounded-lg mb-3 last:mb-0 hover:shadow-md hover:shadow-gray-500 duration-300">
      <div className="flex gap-3 items-center">
        <input
          onChange={handleOnChange}
          type="checkbox"
          className="size-5 accent-green-700"
          checked={isDone}
        />
        <label className={isDone ? "line-through" : ""}>{task}</label>
      </div>
      <button
        onClick={handleRemoveTaskBtn}
        className=" bg-red-100 border-2 text-red-700 border-red-100 rounded-md py-1 px-2 active:scale-95 duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Task;
