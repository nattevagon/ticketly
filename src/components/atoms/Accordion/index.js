import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const AccordionContext = createContext();

export function Accordion({ children, defaultIsOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, toggleAccordion }}>
      <div className="w-full overflow-hidden">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionHeader({ children }) {
  const { isOpen, toggleAccordion } = useContext(AccordionContext);

  return (
    <button
      onClick={toggleAccordion}
      className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 transition-all"
    >
      <span>{children}</span>
      <ChevronDownIcon
        className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
          }`}
      />
    </button>
  );
}

export function AccordionContent({ children }) {
  const { isOpen } = useContext(AccordionContext);
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className="transition-all duration-500 ease-in-out"
      style={{ maxHeight: `${height}px` }}
    >
      <div ref={ref} className="px-4 py-3 border-t border-gray-100">
        {children}
      </div>
    </div>
  );
}
