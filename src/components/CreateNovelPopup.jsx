import React, { useState } from 'react';

const CreateNovelPopup = ({ isOpen, onClose, onSave }) => {
  const mockNovels = [
    {
      id: 1,
      title: 'สองรักฉันรับไม่ไหว',
      author: 'G.Lina',
      cover: '/images/novelcover.png',
      chapters: [
        { id: 1, title: 'ตอนที่ 1: เริ่มต้นการเดินทาง' },
        { id: 2, title: 'ตอนที่ 2: การพบเจอที่คาดไม่ถึง' },
        { id: 3, title: 'ตอนที่ 3: ความลับที่ถูกเปิดเผย' },
        { id: 4, title: 'ตอนที่ 4: การต่อสู้ครั้งใหญ่' },
        { id: 5, title: 'ตอนที่ 5: จุดจบที่แสนหวาน' },
      ],
    },
    {
      id: 2,
      title: 'เรื่องราวแห่งความฝัน',
      author: 'DekD',
      cover: '/images/novelcover4.png',
      chapters: [
        { id: 1, title: 'ตอนที่ 1: ความฝันเริ่มต้น' },
        { id: 2, title: 'ตอนที่ 2: การเดินทางสู่ฝัน' },
        { id: 3, title: 'ตอนที่ 3: อุปสรรคที่ต้องผ่าน' },
        { id: 4, title: 'ตอนที่ 4: การต่อสู้เพื่อฝัน' },
        { id: 5, title: 'ตอนที่ 5: ความสำเร็จที่รอคอย' },
      ],
    },
    {
      id: 3,
      title: 'โลกแห่งเวทมนตร์',
      author: 'Nemo',
      cover: '/images/novelcover5.png',
      chapters: [
        { id: 1, title: 'ตอนที่ 1: การค้นพบพลัง' },
        { id: 2, title: 'ตอนที่ 2: การฝึกฝนที่เข้มงวด' },
        { id: 3, title: 'ตอนที่ 3: การเผชิญหน้ากับศัตรู' },
        { id: 4, title: 'ตอนที่ 4: การต่อสู้ครั้งสุดท้าย' },
        { id: 5, title: 'ตอนที่ 5: ชัยชนะและสันติภาพ' },
      ],
    },
  ];

  const [selectedNovel, setSelectedNovel] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleNovelSelect = (novel) => {
    setSelectedNovel(novel);
    setSelectedChapter(null);
  };

  const handleSave = () => {
    if (selectedNovel && selectedChapter) {
      onSave({
        novel: selectedNovel,
        chapter: selectedChapter,
      });
      
      setSelectedNovel(null);
      setSelectedChapter(null);
      onClose();
    }
  };

  const handleClose = () => {
    setSelectedNovel(null);
    setSelectedChapter(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#333333]">สร้างรายการที่คั่นไว้</h2>
          <button
            onClick={handleClose}
            className="text-[#878787] hover:text-[#333333] text-2xl font-bold shrink-0 ml-2"
          >
            x
          </button>
        </div>

        <div className="space-y-4">
          {/* Select Novel */}
          <div>
            <label className="block text-sm font-semibold text-[#333333] mb-2">
              เลือกนิยายที่เคยอ่าน
            </label>
            <div className="space-y-2">
              {mockNovels.map((novel) => (
                <div
                  key={novel.id}
                  onClick={() => handleNovelSelect(novel)}
                  className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedNovel?.id === novel.id
                      ? 'border-[#333333] bg-[#F5F5F5]'
                      : 'border-[#E5E5E5] hover:border-[#CCCCCC]'
                  }`}
                >
                  <img src={novel.cover}
                    className="w-[50px] h-[72px] sm:w-[60px] sm:h-[86px] object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#333333] text-sm sm:text-base line-clamp-2">{novel.title}</p>
                    <p className="text-xs sm:text-sm text-[#878787] mt-1">{novel.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Select Chapter */}
          {selectedNovel && (
            <div>
              <label className="block text-sm font-semibold text-[#333333] mb-2">
                เลือกตอนที่อ่านค้างไว้
              </label>
              <div className="space-y-2">
                {selectedNovel.chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    onClick={() => setSelectedChapter(chapter)}
                    className={`p-2 sm:p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedChapter?.id === chapter.id
                        ? 'border-[#333333] bg-[#F5F5F5]'
                        : 'border-[#E5E5E5] hover:border-[#CCCCCC]'
                    }`}
                  >
                    <p className="text-sm sm:text-base text-[#333333]">{chapter.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 pt-4">
            <button
              onClick={handleClose}
              className="px-4 py-2 border border-[#E5E5E5] rounded-full text-[#636363] hover:bg-[#F5F5F5] transition-colors w-full sm:w-auto"
            >
              ยกเลิก
            </button>
            <button
              onClick={handleSave}
              disabled={!selectedNovel || !selectedChapter}
              className={`px-4 py-2 rounded-full text-white transition-colors w-full sm:w-auto ${
                selectedNovel && selectedChapter
                  ? 'bg-[#333333] hover:bg-[#555555]'
                  : 'bg-[#CCCCCC] cursor-not-allowed'
              }`}
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNovelPopup;
