import React, { useState } from 'react';
import Banner from '../components/Banner';
import NovelCard from '../components/NovelCard';

const DekDNovelsPage = () => {
  // Sample promotional banners data - แค่รูปภาพเท่านั้น
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

  return (
    <div>
      {/* Banner Section (Can Swipe) */}
      <Banner banners={Banners} />

      {/* Header */}
      <h2 className="text-2xl font-bold text-[#333333] ml-35 mt-12.5">รายการที่คั่นไว้</h2> 
      <div className='border-t border-[#E5E5E5] mt-2'></div>

      {/* Create / Edit / Del */}
      <div className='flex py-7 px-35 items-center justify-between'>
        <p className=' text-[#878787]'>จำนวนทั้งหมด {100} รายการ</p>
        
        <div className='text-xs text-[#636363]'>
          <button className='border border-[#E5E5E5] rounded-full px-3 py-2 mr-2'>สร้าง</button>
          <button className='border border-[#E5E5E5] rounded-full px-3 py-2'>แก้ไข</button>
        </div>
      </div>

      {/* Content */}
      <div className="px-35 mb-10">
        <NovelCard />
      </div>
      
    </div>
  );
};

export default DekDNovelsPage;
