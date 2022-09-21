import { useState } from "react";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import ListTask from "./components/ListTask";

interface Tasks {
  id: number;
  title: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  function addToTask() {
    if (!taskTitle) return;

    const newTask = {
      id: Math.floor(Date.now() * Math.random()),
      title: taskTitle,
      isComplete: false,
    };

    setTasks((oldState) => [...oldState, newTask]);
    setTaskTitle("");
  }

  function editToTask(id: number) {
    const taskComplete = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );

    setTasks(taskComplete);
  }

  function removeTask(id: number) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }

  return (
    <div className="bg-[#191919] h-screen flex flex-col items-center">
      <Header />
      <InputTask
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        addToTask={addToTask}
      />
      <ListTask tasks={tasks} onEdit={editToTask} onRemove={removeTask} />
    </div>
  );
}

export default App;
