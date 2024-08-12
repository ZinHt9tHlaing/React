import { useContext } from "react";
import Task from "./Task";
import TaskContext from "../../context/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <div className=" font-bold font-serif text-xl mb-3 flex justify-between items-center">
        <h3>Task List</h3>
        <h3>
          [ Total - {tasks.length} / Done -{" "}
          {tasks.filter((task) => task.isDone).length} ]
        </h3>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} job={task} />
      ))}
    </div>
  );
};

export default TaskList;
