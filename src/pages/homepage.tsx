import { useState } from "react";
import Link from "../components/link";
import DateTimePicker from "../components/dateTimePicker";
import Task from "../components/task";
import dayjs from "dayjs";

type task = {
  taskName: string;
  taskDay: number;
  taskMonth: string;
};

const Homepage = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [inputText, setInputText] = useState("");

  const [inputDate, setInputDate] = useState("");

  const [taskArray, setTaskArray] = useState<task[]>([]);

  const handleDateChange = (inputDate: string) => {
    setInputDate(inputDate);
  };

  const handleAddButtonClick = () => {
    if (
      taskArray.length === 0 ||
      taskArray.findIndex((task) => task.taskName === inputText) === -1
    ) {
      setTaskArray((prevState) => {
        return [
          ...prevState,
          {
            taskDay: dayjs(inputDate).day(),
            taskMonth: dayjs(inputDate).month().toString(),
            taskName: inputText,
          },
        ];
      });
    }

    setInputDate("");
    setInputText("");
    setShowDatePicker(false);
  };

  return (
    <>
      <div className="bg-purple-600 h-10">
        <div className=" max-w-4xl mx-auto text-3xl flex items-center align-middle justify-between">
          <h1 className="text-white font-bold">ToDo</h1>
          <div className="flex items-center justify-between gap-5 text-base">
            <div className="hover:bg-white hover:text-black hover:cursor-pointer text-white rounded-md px-4">
              <Link>Link 1</Link>
            </div>
            <div className="hover:bg-white hover:text-black hover:cursor-pointer text-white rounded-md px-4">
              <Link>Link 2</Link>
            </div>
            <div className="hover:bg-white hover:text-black hover:cursor-pointer text-white rounded-md px-4">
              <Link>Link 3</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-evenly mt-8 mb-8">
        <div>
          <div className="bg-white max-w-4xl mx-auto flex flex-col justify-between rounded-md p-8 align-text-top h-60">
            <textarea
              required={true}
              className="h-24 p-4 border-2 rounded-md whitespace-pre-line"
              value={inputText} //Two-way binding
              onChange={(event) => {
                setInputText(event.target.value);
              }}
              aria-rowspan={3}
              placeholder="Input text here.."
            ></textarea>
            <div className="flex justify-between">
              <DateTimePicker
                value={inputDate} //Two-way binding
                onChange={handleDateChange}
                showDatePicker={showDatePicker}
                setShowDatePicker={setShowDatePicker}
                required={true}
              ></DateTimePicker>
              <button
                onClick={handleAddButtonClick}
                className="bg-purple-600 rounded-md text-white w-20 h-10 font-bold uppercase "
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-w-4xl mx-auto flex flex-col justify-between rounded-md p-8 align-text-top h-60 text-center">
        <h1 className="text-2xl font-semibold"> Tasks</h1>
        {taskArray.map((task) => (
          <Task
            key={task.taskName}
            taskDay={task.taskDay}
            taskMonth={task.taskMonth}
            taskName={task.taskName}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
