import React from "react";

const DropdownMenu = ({ children, position }) => {
  return (
    <div className={"dropdown" + (position ? ' ' + position : '')}>
      {children}
    </div>
  );
};

export default DropdownMenu;
