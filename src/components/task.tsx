import { useState } from "react";
import TaskName from "./taskName";

type TaskProps = {
  taskName: string;
  taskDay: string;
  taskMonth: string;
  onUpdateName: (oldTaskName: string, newTaskName: string) => void;
  handleRemoveTask: () => void;
  key: React.Key;
};

const Task: React.FC<TaskProps> = ({
  taskName,
  taskDay,
  taskMonth,
  key,
  onUpdateName,
  handleRemoveTask: handleRemoveTask,
}) => {
  const [newTaskName, setTaskNameState] = useState(taskName);

  const [showTaskChange, setShowTaskChange] = useState(false);

  const handleTaskNameChange = (taskName: string) => {
    setTaskNameState(taskName);
  };

  return (
    <div
      key={key}
      className="flex justify-between border-solid border-black border-2 rounded-xl min-h-fit p-5 items-center"
    >
      <TaskName
        value={newTaskName}
        onChange={(event) => {
          handleTaskNameChange(event.target.value);
        }}
        onUpdateName={() => onUpdateName(taskName, newTaskName)}
        setShowTaskChange={setShowTaskChange}
        showTaskChange={showTaskChange}
      />
      <button
        onClick={handleRemoveTask}
        className="flex flex-col justify-between items-center p-5 text-white font-bold bg-purple-600 rounded-lg h-20 w-20"
      >
        <div className="text-xs font-bold">{taskMonth}</div>
        <div className="text-sm">{taskDay}</div>
      </button>
    </div>
  );
};

export default Task;
