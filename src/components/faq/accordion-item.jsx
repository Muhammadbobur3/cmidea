import { useState } from "react";
import { Transition } from "@headlessui/react";

export const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-400">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 px-4 text-left"
      >
        <h3 className="text-lg text-gray-800 font-medium">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 max-h-0"
        enterTo="opacity-100 max-h-full"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 max-h-full"
        leaveTo="opacity-0 max-h-0"
      >
        {(ref) => (
          <div ref={ref} className="px-4 py-2">
            <p className="text-gray-700">{answer}</p>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default AccordionItem;
