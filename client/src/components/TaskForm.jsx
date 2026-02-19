import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("All fields are required!");
      return;
    }

    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mb-10"
    >
      <input
        type="text"
        placeholder="Task Title"
        className="border-4 border-gray-300 p-4 text-xl mb-5 text-white bg-[#0e024a] rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task Description"
        className="border-4 border-gray-300 text-xl mb-5 text-white bg-[#0e024a] p-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="bg-red-700 text-white font-bold py-4 text-3xl rounded-xl active:scale-95 transition"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
