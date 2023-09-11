import { useState } from "react";

type DateTimePickerProps = {
  showDatePicker: boolean;
  setShowDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: (inputDate: string) => void;
  value: string;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  showDatePicker,
  value,
  setShowDatePicker,
  onChange,
}) => {
  const className = "bg-white";

  return (
    <>
      {showDatePicker ? (
        <input
          value={value}
          className={className}
          onChange={(event) => {
            onChange(event.target.value);
          }}
          type="date"
        ></input>
      ) : (
        <button className={className} onClick={() => setShowDatePicker(true)}>
          Date Time Picker
        </button>
      )}
    </>
  );
};

export default DateTimePicker;
