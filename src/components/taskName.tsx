import React from "react";

type TaskNameProps = {
  value: string;
  showTaskChange: boolean;
  setShowTaskChange: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateName: () => void;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const TaskName: React.FC<TaskNameProps> = ({
  value,
  showTaskChange,
  onUpdateName,
  setShowTaskChange,
  onChange,
}) => {
  return (
    <>
      {showTaskChange ? (
        <textarea
          value={value}
          onChange={onChange}
          onBlur={() => {
              setShowTaskChange(false);
              onUpdateName()
          }}
        ></textarea>
      ) : (
        <h1
          onDoubleClick={() => {
            setShowTaskChange(true);
          }}
        >
          {value}
        </h1>
      )}
    </>
  );
};

export default TaskName;
