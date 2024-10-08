import Task from "./Task";

const TaskList = ({ tasks, removeTask, isLoading, doneTask }) => {
  return (
    <>
      {isLoading ? (
        <p className="text-center text-2xl text-gray-600 font-bold animate-pulse">
          Loading...
        </p>
      ) : (
        <div>
          <div className=" font-bold font-serif text-xl mb-3 flex justify-between items-center">
            <h3>Task List</h3>
            <h3>
              [ Total - {tasks.length} / Done -{" "}
              {tasks.filter((task) => task.isDone).length} ]
            </h3>
          </div>
          {tasks.map((task) => (
            <Task
              key={task.id}
              job={task}
              removeTask={removeTask}
              doneTask={doneTask}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TaskList;
