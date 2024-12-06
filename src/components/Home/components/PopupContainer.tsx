import React, { useState } from 'react';

export default function PopupContainer() {
    const imagePopup = [
        '/assets/image/popup-1.png',
        '/assets/image/popup-2.png',
        '/assets/image/popup-3.png',
    ];
    const [visibilityPopups, setVisibilityPopups] = useState(
        imagePopup.map(() => ({ visibility: 'visible' }))
    );
    const invisiblePopup = (index) => {
        setVisibilityPopups((prevPopups) =>
            prevPopups.map((style, i) =>
            i === index ? { visibility: 'hidden' } : style 
          ))
    }
    return (
        <div className="absolute z-30 top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex flex-row gap-10">
            {imagePopup.map((image, index) => (
                <div key={index} className='relative' style={{ ...visibilityPopups[index]}}>
                    <img src={image}/>
                    <button onClick={()=>invisiblePopup(index)} className="absolute z-40 bottom-5 right-24 bg-none p-1 border text-white text-xs rounded-sm ">
                        오늘 하루 그만보기
                    </button>
                    <button onClick={()=>invisiblePopup(index)} className="absolute z-40 bottom-5 right-5 bg-none p-1 border text-white text-xs rounded-sm">
                        창닫기 ✕
                    </button>
                </div>
            ))}
            </div>
        </div>
    );
}
