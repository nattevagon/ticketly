import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";

const CalendarField = ({ name, value, placeholder, onChange, baseClass, isTimePicker = false }) => {
  const calendarRef = useRef(null);
  const timePickerRef = useRef(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [internalDate, setInternalDate] = useState(value ? new Date(value) : new Date());
  const [time, setTime] = useState(
    value ? new Date(value).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) : "12:00"
  );
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
        setShowTimeDropdown(false);
      }
    }
    if (showCalendar) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar]);

  useEffect(() => {
    if (isTimePicker) {
      function handleClickOutside(event) {
        if (timePickerRef.current && !timePickerRef.current.contains(event.target)) {
          setShowTimeDropdown(false);
        }
      }
      if (showTimeDropdown) document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  const handleDateChange = (date) => {
    setInternalDate(date);

    if (!isTimePicker) {
      onChange({ target: { name, value: date } });
      setShowCalendar(false);
    }
  };

  const handleSelectTime = (h, m) => {
    const newTime = `${h}:${m}`;
    setTime(newTime);

    const updatedDate = new Date(internalDate);
    updatedDate.setHours(h);
    updatedDate.setMinutes(m);

    onChange({ target: { name, value: updatedDate } });
    setShowTimeDropdown(false);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

  return (
    <div
      ref={calendarRef}
      className="relative w-full"
    >
      <input
        readOnly
        type="text"
        name={name}
        placeholder={placeholder}
        value={value ? new Date(value).toLocaleString() : ""}
        onClick={() => setShowCalendar(!showCalendar)}
        className={`${baseClass} cursor-pointer`}
      />
      {showCalendar && (
        <div className="absolute z-50 mt-2 p-2 shadow-sm bg-secondary-white dark:bg-secondary-black border border-third-white dark:border-third-black">
          <Calendar
            onChange={handleDateChange}
            value={internalDate}
            className="p-2"
          />

          {isTimePicker && (
            <div
              ref={timePickerRef}
              className="mt-2 flex items-center gap-2 text-primary-black dark:text-primary-white relative"
            >
              <div className="relative w-full">
                <input
                  readOnly
                  value={time}
                  onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                  className="w-full p-2 text-[16px] bg-secondary-white dark:bg-secondary-black border border-third-white dark:border-third-black cursor-pointer"
                />
                {showTimeDropdown && (
                  <div className="absolute bottom-full mb-0 flex border border-third-white dark:border-third-black shadow-lg
                                  bg-third-white dark:bg-third-black max-h-40 overflow-y-auto z-[2] p-2 w-full">
                    {/* Hours */}
                    <ul className="w-full max-h-40 overflow-x-hidden overflow-y-auto">
                      {hours.map((h) => (
                        <li
                          key={h}
                          className="px-3 py-1 hover:bg-primary-white dark:hover:bg-primary-black cursor-pointer"
                          onClick={() => handleSelectTime(h, time.split(":")[1])}
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                    {/* Minutes */}
                    <ul className="w-full max-h-40 overflow-x-hidden overflow-y-auto">
                      {minutes.map((m) => (
                        <li
                          key={m}
                          className="px-3 py-1 hover:bg-primary-white dark:hover:bg-primary-black cursor-pointer"
                          onClick={() => handleSelectTime(time.split(":")[0], m)}
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarField;
