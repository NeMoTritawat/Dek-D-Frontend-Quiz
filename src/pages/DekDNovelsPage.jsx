import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Banner from '../components/Banner';
import NovelCard from '../components/NovelCard';
import CreateNovelPopup from '../components/CreateNovelPopup';

const DekDNovelsPage = () => {
  const [Banners] = useState([
    {
      image: '/images/novelcover1.png',
    },
    {
      image: '/images/novelcover2.png',
    },
    {
      image: '/images/novelcover3.png',
    },
    {
      image: '/images/novelcover1.png',
    },
    {
      image: '/images/novelcover2.png',
    },
    {
      image: '/images/novelcover3.png',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState(new Set());
  
  const [placeholderItems, setPlaceholderItems] = useState(() => 
    Array.from({ length: 6 }, (_, index) => ({
      id: `placeholder-${index}`,
      title: 'เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ',
      author: 'G.Lina',
      cover: '/images/novelcover.png',
      chapter: 'ตอนที่ 18: เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ',
      lastUpdated: 'คั่นล่าสุด 9 ก.ค. 63 / 22.56 น.',
      isPlaceholder: true,
    }))
  );

  // format date
  const formatLastUpdated = (date) => {
    const thaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const day = date.getDate();
    const month = thaiMonths[date.getMonth()];
    const year = (date.getFullYear() + 543) % 100;
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `คั่นล่าสุด ${day} ${month} ${year} / ${hours}.${minutes} น.`;
  };

  const handleSaveBookmark = (data) => {
    const now = new Date();
    const newBookmark = {
      id: Date.now(),
      title: data.novel.title,
      author: data.novel.author,
      cover: data.novel.cover,
      chapter: data.chapter.title,
      lastUpdated: formatLastUpdated(now),
    };
    setBookmarks([...bookmarks, newBookmark]);
  };

  const displayBookmarks = () => {
    return [...placeholderItems, ...bookmarks];
  };

  // toggle edit mode
  const handleToggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setSelectedItems(new Set()); // reset when exit
  };

  // toggle selection card
  const handleToggleSelection = (itemId) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  // delete function
  const handleDeleteSelected = () => {
    if (selectedItems.size === 0) return;
    
    const remainingBookmarks = bookmarks.filter(
      bookmark => !selectedItems.has(bookmark.id)
    );
    
    const remainingPlaceholders = placeholderItems.filter(
      placeholder => !selectedItems.has(placeholder.id)
    );
    
    setBookmarks(remainingBookmarks);
    setPlaceholderItems(remainingPlaceholders);
    setSelectedItems(new Set());
    setIsEditMode(false);
  };

  return (
    <div>
      {/* Banner Section (Can Swipe) */}
      <Banner banners={Banners} />

      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#333333] ml-4 sm:ml-8 md:ml-16 lg:ml-35 mt-6 sm:mt-8 md:mt-10 lg:mt-12.5 px-4 sm:px-0">รายการที่คั่นไว้</h2> 
      <div className='border-t border-[#E5E5E5] mt-2 mx-4 sm:mx-8 md:mx-16 lg:mx-0'></div>

      {/* Create / Edit / Del */}
      <div className='flex flex-col sm:flex-row py-4 sm:py-7 px-4 sm:px-8 md:px-16 lg:px-35 items-start sm:items-center justify-between gap-3 sm:gap-0'>
        <p className='text-sm sm:text-base text-[#878787]'>จำนวนทั้งหมด {displayBookmarks().length} รายการ</p>
        
        <div className='text-xs text-[#636363] flex items-center gap-2 flex-wrap'>
          {isEditMode ? (
            <>
              <button 
                onClick={handleToggleEditMode}
                className='border border-[#E5E5E5] rounded-full px-3 py-2 hover:bg-[#F5F5F5] transition-colors'
              >
                ยกเลิก
              </button>
              <button 
                onClick={handleDeleteSelected}
                disabled={selectedItems.size === 0}
                className={`border border-[#E5E5E5] rounded-full px-3 py-2 flex items-center gap-2 hover:bg-[#F5F5F5] transition-colors ${
                  selectedItems.size === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FaTrash />
                {selectedItems.size} รายการ
              </button> 
            </>
          ) : (
            <>
              <button 
                onClick={() => setIsModalOpen(true)}
                className='border border-[#E5E5E5] rounded-full px-3 py-2 hover:bg-[#F5F5F5] transition-colors'
              >
                สร้าง
              </button>
              <button 
                onClick={handleToggleEditMode}
                className='border border-[#E5E5E5] rounded-full px-3 py-2 hover:bg-[#F5F5F5] transition-colors'
              >
                แก้ไข
              </button>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-35 mb-6 sm:mb-10">
        <NovelCard 
          bookmarks={displayBookmarks()} 
          isEditMode={isEditMode}
          selectedItems={selectedItems}
          onToggleSelection={handleToggleSelection}
        />
      </div>

      {/* Create Popup */}
      <CreateNovelPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBookmark}
      />
      
    </div>
  );
};

export default DekDNovelsPage;
