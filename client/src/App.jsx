import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleStatus,
} from "./api";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (task) => {
    await createTask(task);
    fetchTasks();
  };

  const handleUpdate = async (id, updatedTask) => {
    await updateTask(id, updatedTask);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleToggle = async (id) => {
    await toggleStatus(id);
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black to-red-900 flex justify-center py-10">
      <div className="w-full max-w-2xl bg-linear-to-tl from-black to-red-900 shadow-lg rounded-xl p-6">
        <h1 className="text-5xl font-extrabold text-white text-center mb-12">
          Task Manager
        </h1>

        <TaskForm onAdd={handleAdd} />
        <TaskList
          tasks={tasks}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}

export default App;
