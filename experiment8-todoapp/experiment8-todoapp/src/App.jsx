import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from local JSON
  useEffect(() => {
    fetch("./tasks.json")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(() => setTasks([]));
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const newItem = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, newItem]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">📝 To-Do List</h1>

      <form onSubmit={addTask} className="flex mb-4 space-x-2">
        <input
          type="text"
          className="border rounded-md p-2 w-64 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="text-gray-500 italic mt-4">No tasks found.</p>
      ) : (
        <ul className="w-80">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center mb-2 p-3 rounded-md shadow-sm ${
                task.completed
                  ? "bg-green-100 line-through text-gray-500"
                  : "bg-white"
              }`}
            >
              <span
                onClick={() => toggleTask(task.id)}
                className="cursor-pointer"
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
