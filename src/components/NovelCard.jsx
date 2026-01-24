import React from 'react';
import { FaList, FaBookmark, FaCheck } from "react-icons/fa";

const NovelCard = ({ bookmarks = [], isEditMode = false, selectedItems = new Set(), onToggleSelection }) => {
  const displayItems = bookmarks;

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16">
        {displayItems.map((item, index) => {
          const isSelected = selectedItems.has(item.id);
          return (
            <div key={item.id || index} className="flex items-start gap-3 sm:gap-4 max-w-full">
              <img src={item.cover || '/images/novelcover.png'}
                className="w-[70px] h-[100px] sm:w-[80px] sm:h-[115px] object-cover rounded-lg shrink-0"
              />
              
              <div className="flex flex-col justify-between h-[100px] sm:h-[115px] overflow-hidden text-xs sm:text-sm relative flex-1 min-w-0">
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-[#333333] flex-1 line-clamp-2 break-words">
                      {item.title}
                    </p>

                    {isEditMode && (
                      <button
                        onClick={() => onToggleSelection(item.id)}
                        className="shrink-0 mt-0.5 cursor-pointer"
                      >
                        {isSelected ? (
                          <div className="w-5 h-5 rounded-full bg-[#F37A01] flex items-center justify-center">
                            <FaCheck className="text-white text-xs" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-[#F37A01]"></div>
                        )}
                      </button>
                    )}
                  </div>
                  <p className="text-[#333333] line-clamp-1">{item.author}</p>
                </div>

                <div className="text-[#A8A8A8] text-xs space-y-1">
                  <div className='flex items-center min-w-0'>
                    <FaList className="shrink-0" />
                    <p className="ml-1 truncate">{item.chapter}</p>
                  </div>
                  <div className='flex items-center min-w-0'>
                    <FaBookmark className="shrink-0" />
                    <p className="ml-1 truncate">{item.lastUpdated}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NovelCard;
