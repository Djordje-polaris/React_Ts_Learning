import { useState } from "react";
import Link from "../components/link";
import DateTimePicker from "../components/dateTimePicker";
import dayjs from "dayjs";
import Task from "../components/task";
import Modal from "../components/modal";

export type Task3 = {
  taskName: string;
  taskDay: string;
  taskMonth: string;
};

const Homepage = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [inputText, setInputText] = useState("");

  const [inputDate, setInputDate] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const [taskArray, setTaskArray] = useState<Task3[]>([]);

  const handleDateChange = (inputDate: string) => {
    setInputDate(inputDate);
  };

  const handleRemoveTask = (taskName: string) => {
    setTaskArray((prevState) => {
      const tempArray = [...prevState];
      console.log(tempArray);
      console.log([...prevState]);
      console.log(taskName);

      const taskArrayIndex = tempArray.findIndex((task) => task.taskName === taskName);
      console.log(taskArrayIndex);

      tempArray.splice(taskArrayIndex, 1);
      return tempArray;
    });
    console.log(taskArray);
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
            taskDay: dayjs(inputDate).format("DD"),
            taskMonth: dayjs(inputDate).format("MMMM"),
            taskName: inputText,
          },
        ];
      });
    }
    setInputDate("");
    setInputText("");
    setShowDatePicker(false);
  };
  
  const handleUpdateName = (oldTaskName: string, newTaskName: string) => {
    const taskArrayIndex = taskArray.findIndex((task) => task.taskName === oldTaskName);
    if (taskArrayIndex != -1) {
      const tempTaskArray = [...taskArray];
      tempTaskArray[taskArrayIndex].taskName = newTaskName;
      setTaskArray(tempTaskArray);
    }
  };
  
  return (
    <>
    <Modal modalShow={modalShow} setModalShow={setModalShow} />
      <div className="bg-purple-600 h-10">
        <div className=" max-w-4xl mx-auto text-3xl flex items-center align-middle justify-between">
          <h1 className="text-white font-bold">ToDo</h1>
          <div className="flex items-center justify-between gap-5 text-base">
            <div className="hover:bg-white hover:text-black hover:cursor-pointer text-white rounded-lg px-4">
              <Link>Link 1</Link>
            </div>
            <div className="hover:bg-white hover:text-black hover:cursor-pointer text-white rounded-lg px-4">
              <Link>Link 2</Link>
            </div>
            <div className="hover:bg-white hover:text-black hover:cursor-pointer text-white rounded-lg px-4">
              <Link>Link 3</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-evenly mt-8 mb-8">
        <div>
          <div className="bg-white max-w-4xl mx-auto flex flex-col justify-between rounded-lg p-8 align-text-top h-60">
            <textarea
              className="h-24 p-4 border-2 rounded-lg whitespace-pre-line"
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
              ></DateTimePicker>
              <button
                onClick={() => {
                  {
                    if (inputDate === "" || inputText === "") {
                      setModalShow(true);
                    } else handleAddButtonClick();
                  }
                }}
                className="bg-purple-600 rounded-lg text-white w-20 h-10 font-bold uppercase "
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-w-3xl mx-auto flex flex-col justify-evenly rounded-lg p-8 pb-20 align-text-top text-center">
        <h1 className="text-2xl font-semibold mb-20"> Tasks</h1>
        {taskArray.map((task) => (
          <Task
            key={task.taskName}
            taskDay={task.taskDay}
            taskMonth={task.taskMonth}
            taskName={task.taskName}
            onUpdateName={handleUpdateName}
            handleRemoveTask={() => handleRemoveTask(task.taskName)}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
