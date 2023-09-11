// import Button from "../components/button";
import { ChangeEvent, SetStateAction, useState } from "react";
import Link from "../components/link";
import DateTimePicker from "../components/dateTimePicker";

const Homepage = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [inputText, setInputText] = useState("");

  const [inputDate, setInputDate] = useState("");

  const handleDateChange = (inputDate: string) => {
    setInputDate(inputDate);
    alert(inputDate);
  };

  const handleAddButtonClick = () => {
    alert(inputDate + " " + inputText);
    setInputDate("");
    setInputText("");
    setShowDatePicker(false);
  };

  const alertText = () => {
    // alert(inputText);
    setInputText("");
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
      <div className="flex flex-col justify-evenly">
        <div>
          <div className="bg-white max-w-4xl mx-auto flex flex-col rounded-md ">
            <input
              value={inputText}
              onChange={(event) => {
                setInputText(event.target.value);
              }}
              type="textfield"
              placeholder="Input text here.."
            ></input>
            <div className="flex justify-between">
              <DateTimePicker
                value={inputDate}
                onChange={handleDateChange}
                showDatePicker={showDatePicker}
                setShowDatePicker={setShowDatePicker}
              ></DateTimePicker>
              <button
                onClick={handleAddButtonClick}
                className="bg-purple-600 rounded-md text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <input
              value={inputText}
              onChange={(event) => {
                setInputText(event.target.value);
              }}
              type="text"
            ></input>
            <button className="bg-white" onClick={alertText}>
              Dugme
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
