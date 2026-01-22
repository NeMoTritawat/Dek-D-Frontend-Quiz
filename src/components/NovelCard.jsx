import React from 'react';
import { FaList, FaBookmark } from "react-icons/fa";

const NovelCard = () => {
  return (
    <section className="w-full">

      {/* Grid : 1 row = 3 cards */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-y-5 gap-x-16">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="flex items-start gap-4 max-w-full">
            {/* Cover */}
            <img
              src="/images/novelcover.png"
              alt="Novel Cover"
              className="w-[80px] h-[115px] object-cover rounded-lg"
            />

            {/* Info (ไม่เกินความสูงรูป) */}
            <div className="flex flex-col justify-between h-[115px] overflow-hidden text-sm">
              <div className="space-y-1">
                <p className="font-semibold text-[#333333]">
                  เป็นอนุฯสุขใจยิ่ง ชื่อยาวไปๆ &lt; &gt; ...
                </p>
                <p className="text-[#333333] ">G.Lina</p>
              </div>

              <div className="text-[#A8A8A8] text-xs space-y-1">
                <div className='flex items-center'><FaList /><p className="ml-1">ตอนที่ 18: เป็นอนุษย์ใจยิ่ง ชื่อยาวไป</p></div>
                <div className='flex items-center'><FaBookmark /><p className="ml-1">อัปเดตล่าสุด 9 ก.ค. 63 / 22.56 น.</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NovelCard;
