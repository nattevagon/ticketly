import React from 'react'

const Toggle = ({ name, className, label, title, disabled, checked, onChange }) => {
  return (
    <div>
      {label && (
        <div className="">{label}</div>
      )}
      <label className="label flex items-center gap-2">
        <input
          name={name}
          type="checkbox"
          checked={checked ? "checked" : ""}
          className={"toggle [--tglbg:white] border-slate-400 bg-slate-400 checked:border-slate-900 checked:bg-slate-900 checked:text-slate-900" + (disabled ? " opacity-50 cursor-not-allowed" : "") + (className ? " " + className : "")}
          onChange={onChange}
          disabled={disabled}
        />
        {title && (
          <div className="text-sm font-medium text-primary-black">{title}</div>
        )}
      </label>
    </div>
  )
}

export default Toggle