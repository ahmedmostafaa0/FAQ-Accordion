import { useRef } from "react";

const FAQItem = ({ item, isOpen, onClick }) => {
  const answerRef = useRef(null);
  return (
    <div
      id={`faq-item-${item.id}`}
      className="border-b border-gray-200 last:border-none dark:border-gray-700 transition-colors duration-300 hover:bg-linear-to-r hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent"
    >
      <button
        onClick={() => onClick(item.id)}
        className={`flex justify-between w-full transition-all duration-200 px-4 py-5 text-left focus:outline-none rounded-lg cursor-pointer ${isOpen ? 'bg-linear-to-r from-indigo-200 via-purple-200 to-indigo-200/90 dark:from-indigo-900/80 dark:via-purple-900/80 dark:to-indigo-900/70 dark:text-white font-medium' : 'text-gray-900 dark:text-white  hover:bg-linear-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-transparent hover:bg-clip-text dark:hover:from-indigo-400 dark:hover:to-purple-400'}`}
      >
        <span className="text-lg font-medium pr-6">{item.question}</span>
        <div className={`flex shrink-0 items-center justify-center w-8 min-w-8 aspect-square rounded-full transition-all duration-200 ${isOpen ? 'bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 shadow-md' : 'bg-gray-200 dark:bg-gray-700'}`}>
          <i
            className={`bx bx-${
              isOpen ? "minus" : "plus"
            } ${isOpen ? 'text-white' : 'text-gray-500 dark:text-gray-400'} `}
          ></i>
        </div>
      </button>
      <div
        id={`answer-${item.id}`}
        className="overflow-hidden transition-all duration-150 ease-out"
        ref={answerRef}
        style={{
          maxHeight: isOpen ? `${answerRef.current?.scrollHeight}px` : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300">
          <div className="p-3 rounded-lg overflow-y-auto max-h-[300px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
