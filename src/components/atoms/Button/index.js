import Link from "next/link";
import React from "react";

const Button = ({ href, onClick, icon: Icon, label, disabled, className = "", labelClassName = "", iconClassName = "" }) => {
  console.log(Icon)
  const baseClasses = "flex items-center justify-center" + (className ? ' ' + className : '') + (disabled ? ' opacity-50 cursor-normal' : ' cursor-pointer');
  const content = (
    <div className={"flex px-4 py-2 items-center" + (label ? ' gap-2' : ' justify-center') + " " + baseClasses}>
      {Icon && <Icon className={"h-[24px] cursor-pointer text-primary-white" + (iconClassName ? " " + iconClassName : "")} />}
      <div className={"text-primary-white text-[16px] font-medium" + (labelClassName ? ' ' + labelClassName : '')}>{label}</div>
    </div>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className="hover:opacity-75 size-fit cursor-pointer disabled:opacity-75 disabled:cursor-wait !no-underline">
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
