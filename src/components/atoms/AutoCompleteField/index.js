import React, { useRef, useState, cloneElement, isValidElement } from "react";

const AutoCompleteField = ({
  name,
  onChange,
  inputValue,
  placeholder = "Type to search...",
  onInputValue,
  onChangeInput,
  delay = 600,
  children,
  label,
  options = [],
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const typingTimeout = useRef(null);

  const handleSelect = (item) => {
    if (onInputValue) {
      onInputValue(item.name);
    }
    setShowDropdown(false);

    if (onChange) {
      onChange({ target: { name, value: item.id, label: item.name } });
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;

    if (onInputValue) {
      onInputValue(val);
    }
    setShowDropdown(true);

    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    typingTimeout.current = setTimeout(() => {
      if (onChangeInput) onChangeInput(val);
    }, delay);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded-none input input-bordered bg-secondary-white 
        dark:bg-secondary-black border-third-white dark:border-third-black 
        focus:ring-0 outline-none"
      />

      {(showDropdown && inputValue != "") &&
        React.Children.map(children, (child) => {
          if (!isValidElement(child)) return child;
          // inject props supaya dropdown bisa akses
          return cloneElement(child, {
            options,
            onSelect: handleSelect,
          });
        })}
    </div>
  );
};

const AutoCompleteFieldDropdown = ({ children, options, onSelect }) => {
  // kamu bisa pakai children custom OR mapping options disini
  if (children) {
    return typeof children === "function"
      ? children({ options, onSelect }) // kalau mau pakai render prop
      : children;
  }
  return null; // default kosong (tidak render apa-apa)
};

AutoCompleteFieldDropdown.displayName = "AutoCompleteFieldDropdown";

export { AutoCompleteField, AutoCompleteFieldDropdown };