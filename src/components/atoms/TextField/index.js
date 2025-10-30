import React, { useEffect, useRef, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import CalendarField from "../CalendarField";

const TextField = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  className = "",
  label,
  fieldValid,
  onKeyDown,
  options = [],
  disabled = false,
  isTimePicker = false
}) => {
  let baseClass = `w-full text-[16px] px-4 py-2 input input-bordered rounded-xl bg-secondary-white dark:bg-secondary-black rounded-none border-third-white dark:border-third-black placeholder-third-black dark:placeholder-third-white no-spinner ${className}`;
  const baseLabel = "text-md font-semibold"
  const [showPassword, setShowPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectSearch, setSelectSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (type === "select") {
      const optionValue = options.find((opt) => opt.id === value)?.name;
      setSelectSearch(optionValue);
    }

    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [options, placeholder, type, value]);

  if (fieldValid && (fieldValid?.status && (fieldValid?.name === name))) {
    baseClass = baseClass + " !border-primary-red";
  }

  console.log(fieldValid)

  if (type === "textarea") {
    return (
      <div className="form-control w-full text-primary-black dark:text-primary-white">
        {label && <label className={"label" + (baseLabel ? " " + baseLabel : "")}>{label}</label>}
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`${baseClass} textarea min-h-[100px] max-h-[200px]`}
          disabled={disabled}
        />
        {fieldValid && (fieldValid?.status && (fieldValid?.name === name)) && <p className="mt-1 text-[10px] text-primary-red">{fieldValid?.message}</p>}
      </div>
    );
  }

  // if (type === "select") {
  //   return (
  //     <div className="form-control w-full text-primary-black dark:text-primary-white">
  //       {label && <label className="label">{label}</label>}
  //       <select
  //         name={name}
  //         value={value}
  //         onChange={onChange}
  //         className={`select bg-secondary-white dark:bg-secondary-black border border-third-white dark:border-third-black ${baseClass}` + (value === "" ? " text-third-black dark:text-third-white" : "")}
  //         disabled={disabled}
  //       >
  //         <option className="text-third-black dark:text-third-white" value="">{placeholder}</option>
  //         {options.map((opt, idx) => (
  //           <option key={idx} value={opt.id}>
  //             {opt.name}
  //           </option>
  //         ))}
  //       </select>
  //       {fieldValid && (fieldValid?.status && (fieldValid?.name === name)) && <p className="mt-1 text-[10px] text-primary-red">{fieldValid?.message}</p>}
  //     </div>
  //   );
  // }
  if (type === "select") {
    return (
      <div
        ref={wrapperRef}
        className="form-control w-full text-primary-black dark:text-primary-white relative"
      >
        {label && <label className={"label" + (baseLabel ? " " + baseLabel : "")}>{label}</label>}
        {/* <div
          className={`cursor-pointer flex items-center ${baseClass}` +
            (value === "" ? " text-third-black dark:text-third-white" : "")
          }
          onClick={() => !disabled && setShowDropdown((prev) => !prev)}
        >
          {options.find((opt) => opt.id === value)?.name || placeholder}
        </div> */}
        <input
          type="text"
          placeholder={placeholder}
          value={selectSearch}
          onChange={(event) => {
            setSelectSearch(event.target.value);
            if (!showDropdown) setShowDropdown(true);
          }}
          onClick={() => {
            if (!showDropdown) setSelectSearch("");
            !disabled && setShowDropdown((prev) => !prev);
          }}
          className={baseClass}
          disabled={disabled}
        />

        {showDropdown && (
          <ul className="absolute top-full left-0 mt-2 w-full border border-third-white dark:border-third-black bg-secondary-white dark:bg-secondary-black shadow-lg z-50 max-h-60 overflow-y-auto rounded-xl">
            <li
              onClick={() => {
                onChange({ target: { name, value: "" } });
                setShowDropdown(false);
              }}
              className="p-3 cursor-pointer hover:bg-primary-white dark:hover:bg-primary-black text-third-black dark:text-third-white"
            >
              {placeholder}
            </li>
            {options
              .filter((opt) => opt?.name.toLowerCase().includes(selectSearch.toLowerCase()))
              .map(opt => (
                <li
                  key={opt?.id}
                  onClick={() => {
                    setSelectSearch(opt?.name);
                    onChange({ target: { name, value: opt?.id } });
                    setShowDropdown(false);
                  }}
                  className="p-3 cursor-pointer hover:bg-primary-white dark:hover:bg-primary-black"
                >
                  {opt?.name}
                </li>
              ))}
          </ul>
        )}

        {fieldValid && fieldValid?.status && fieldValid?.name === name && (
          <p className="mt-1 text-[10px] text-primary-red">{fieldValid?.message}</p>
        )}
      </div>
    );
  }

  else if (type === "calendar") {
    return <CalendarField {...{ name, value, placeholder, onChange, baseClass, isTimePicker }} />;
  }
  else {
    return (
      <div className="form-control w-full text-primary-black dark:text-primary-white">
        {label && <label className={"label" + (baseLabel ? " " + baseLabel : "")}>{label}</label>}

        <div className="relative">
          <input
            type={type === "password" ? (showPassword ? "text" : "password") : type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={(e) => {
              if (type === "number" && (e.key === "-" || e.key === "Subtract")) {
                e.preventDefault();
              }
              if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
              }
              onKeyDown && onKeyDown(e);
            }}
            onInput={(e) => {
              if (type === "number" && e.target.value < 0) {
                e.target.value = e.target.value.replace("-", "");
              }
            }}
            onWheel={(e) => e.target.blur()}
            className={baseClass}
            disabled={disabled}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-4 h-4 cursor-pointer text-primary-black dark:text-primary-white" />
              ) : (
                <EyeIcon className="w-4 h-4 cursor-pointer text-primary-black dark:text-primary-white" />
              )}
            </button>
          )}
        </div>
        {fieldValid && (fieldValid?.status && (fieldValid?.name === name)) && <p className="mt-1 text-[10px] text-primary-red">{fieldValid?.message}</p>}
      </div>
    );
  }
};

export default TextField;