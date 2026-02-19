import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdate, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-2xl text-gray-500">
        No tasks yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col  gap-4">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TaskList;
