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
  return (
    <>
      {showDatePicker ? (
        <input
          value={value}
          className="bg-gray-300 text-center w-60 border-black border-solid border-1 cursor-pointer"
          onChange={(event) => {
            onChange(event.target.value);
          }}
          type="date"
        ></input>
      ) : (
        <button
          className="bg-gray-300 align-middle text-sm w-60 border-solid border-black"
          onClick={() => setShowDatePicker(true)}
        >
          Date Time Picker
        </button>
      )}
    </>
  );
};

export default DateTimePicker;
