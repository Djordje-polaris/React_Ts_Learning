import React from "react";

type TaskProps = {
  taskName: string;
  taskDay: number;
  taskMonth: string;
  key: React.Key;
};

const Task: React.FC<TaskProps> = ({ taskName, taskDay, taskMonth, key }) => {
  return (
    <div key = {key}>
      <h1>{taskName}</h1>
      <button>
        {taskMonth}
        {taskDay}
      </button>
    </div>
  );
};

export default Task;
