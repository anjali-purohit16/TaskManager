import { useState } from "react";

function TaskItem({ task, onUpdate, onDelete, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {
    if (!title.trim() || !description.trim()) {
      alert("All fields required!");
      return;
    }
    onUpdate(task._id, { title, description });
    setIsEditing(false);
  };

  return (
    <div
      className={`p-5 rounded-lg text-white ${
        task.status === "completed"
          ? "bg-green-800"
          : "bg-[#17066b]"
      }`}
    > 
      {isEditing ? (
        <div className="flex  flex-col gap-8">
          <input
            className="border-2xl text-xl p-4 rounded-3xl text-white bg-[#0e024a]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border-2xl p-4 rounded-3xl text-xl text-white bg-[#0e024a]"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white text-2xl active:scale-95 py-5 px-2 rounded-3xl"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <h3 className="font-bold text-xl">{task.title}</h3>
          <p className="text-lg mb-2">{task.description}</p>

          <div className="flex gap-2">
            <button
              onClick={() => onToggle(task._id)}
              className="bg-green-500 text-white px-3 py-3 rounded-3xl text-xl"
            >
              {task.status === "completed"
                ? "Mark Pending"
                : "Mark Complete"}
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-5 py-3 rounded-3xl text-xl"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(task._id)}
              className="bg-red-500 text-white px-5 py-3 rounded-3xl text-xl"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
