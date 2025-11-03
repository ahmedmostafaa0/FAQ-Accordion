import FAQItem from "./FAQItem";
import faqData from "../data/faqData";
import { useEffect, useState } from "react";

const FAQList = ({toggleDarkMode, darkMode}) => {
  const [openId, setOpenId] = useState(null)
  const [expandAll, setExpandAll] = useState(false)

  const toggleItem = (id) => {
    if(expandAll){
      setExpandAll(false)
    }
    setOpenId(prevId => {
      if(prevId === id){
        return null
      }
      return id
    })
  }

  const toggleExpandAll = () => {
    setExpandAll(!expandAll)
    setOpenId(null)
  }

  useEffect(() => {
    if(openId && typeof window !== 'undefined'){
      setTimeout(() => {
        const el = document.getElementById(`faq-item-${openId}`)
        if(el){
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100);
    }
  }, [openId])
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-3xl font-bold w-full sm:text-left sm:w-auto">
          Frequently asked questions
        </h2>
        <div className="flex items-center space-x-4">
          <button onClick={toggleExpandAll} className="flex items-center gap-2 py-2 px-4 bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-sm font-medium rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 cursor-pointer text-white">
            <i className={`bx bx-${expandAll ? 'collapse-alt' : 'expand-alt'} text-lg`}></i>
            <span>{expandAll ? 'Collapse All' : 'Expand All'}</span>
          </button>
          <button onClick={toggleDarkMode} className="w-10 h-10 bg-linear-to-r from-gray-200 to-gray-300 rounded-full text-gray-700 flex items-center justify-center hover:shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200">
            <i className={`bx bx-${darkMode ? 'sun' : 'moon'} text-xl`}></i>
          </button>
        </div>
      </div>
      <div className="overflow-hidden bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-indigo-100/50 dark:border-indigo-900/30 transition-all duration-300">
      {faqData.map(item => (
        <FAQItem key={item.id} item={item} onClick={toggleItem} isOpen={expandAll || openId === item.id} />
      ))}
      </div>
    </div>
  );
};

export default FAQList;
