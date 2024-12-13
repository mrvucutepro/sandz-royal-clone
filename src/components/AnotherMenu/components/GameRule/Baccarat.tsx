import { bacara, tableBacara } from '@/lib/constants/GameRule'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'

export default function Baccarat() {

  return (
    <div className='text-[#666]'>
      <p className='font-bold text-2xl pb-2'>바카라 게임방법</p>
        <ScrollArea className="bg-white max-h-[400px] overflow-y-auto rounded-sm p-4">
          {bacara.map((section, index) => (
            <div key={index} className="text-sm">
              <h2 className="text-lg font-bold mb-2 ">{section.title}</h2>
              {section.content.map((content, subIndex) =>
                typeof content === 'object' && 'image' in content ? (
                  <div key={subIndex}>
                    <li className='mb-2'>{content.item}</li>
                    <div className='flex'>
                      {content.image.map((img, imgIndex) => (
                        <img className='mb-2' key={imgIndex} src={img} alt={`img-${imgIndex}`} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className='mb-2' key={subIndex}>{content}</p>
                )
              )}
            </div>
          ))}
          <div>
              <table className="table-auto border-collapse w-full border-black border text-center table-fixed">
                <thead>
                  <tr>
                    <th colSpan={3} className="border border-black px-4 py-2 bg-[#ccc]">{tableBacara.header}</th>  
                  </tr>         
                  <tr>
                    <th className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable_2.columns.data[0].subHeader}</th>
                    <th className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable_2.columns.data[1].subHeader}</th>
                    <th className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable_2.columns.data[2].subHeader}</th>
                  </tr>
                  <tr>
                    <th  className="border border-black px-4 py-2 text-red-700">{bullFightTable_2.columns.data[0].subValue}</th>
                    <th  className="border border-black px-4 py-2 text-red-700">{bullFightTable_2.columns.data[1].subValue}</th>
                    <th  className="border border-black px-4 py-2 text-red-700">{bullFightTable_2.columns.data[2].subValue}</th>         
                  </tr>
                </thead>
              </table>
          </div>
        </ScrollArea>
        </div>
  )
}
