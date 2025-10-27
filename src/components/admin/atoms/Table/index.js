import React from "react";

export const Table = ({ children, className }) => (
  <table className={"table rounded-none shadow-sm bg-secondary-white dark:bg-secondary-black w-full" + + (className ? " " + className : "")}>{children}</table>
);

export const TableHead = ({ children, className }) => (
  <thead className={"bg-primary-blue text-primary-white text-[16px]" + (className ? " " + className : "")}>{children}</thead>
);

export const TableBody = ({ children }) => (
  <tbody className="text-primary-black dark:text-primary-white">{children}</tbody>
);

export const TableRow = ({ children, className = "", onClick = null }) => (
  <tr
    className={`border-t-[2px] border-primary-white dark:border-primary-black ${className}`}
    onClick={onClick}
  >
    {children}
  </tr>
);

export const TableHeaderCell = ({ children, className = "" }) => (
  <th className={`py-4 font-medium text-left ${className}`}>{children}</th>
);

export const TableCell = ({ children, colspan, className = "" }) => (
  <td className={`font-normal py-4 ${className}`} colSpan={colspan ? colspan : 1}>{children}</td>
);
