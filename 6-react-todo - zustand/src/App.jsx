// import Counter from "./components/Counter";
import Heading from "./components/Heading";
import CreateTask from "./components/tasks/CreateTask";
import TaskList from "./components/tasks/TaskList";
// import TaskProvider from "./context/TaskProvider";

const App = () => {
  return (
    // <TaskProvider>
      <div className="p-10">
        <Heading />
        <CreateTask />
        <TaskList />
      </div>
    // </TaskProvider>
    // <Counter />
  );
};

export default App;
