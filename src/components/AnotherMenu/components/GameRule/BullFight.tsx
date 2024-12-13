import { bullFight, bullFight_2, bullFightSubvalue, bullFightTable, bullFightTable_2 } from '@/lib/constants/GameRule/BullFight';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import React from 'react';

export default function BullFight() {
  return (
    <div className="text-[#666]">
      <p className="font-bold text-2xl pb-2">BullFight 게임방법</p>
      <ScrollArea className="bg-white max-h-[400px] overflow-y-auto rounded-sm p-12">
        {bullFight.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg pb-4">{item.header}</h3>
            {item.header === '(1) 카드크기(값)' ? (
              <>
                {item.content.map((contentItem, contentIndex) => (
                  <li  key={contentIndex} className="list-decimal text-sm mb-2 pl-5">
                    {contentItem}
                  </li>
                ))}
              </>
            ) : (
              item.content.map((contentItem, contentIndex) => (
                <p key={contentIndex} className="text-sm mb-2">
                  {contentItem}
                </p>
              ))
            )}
          </div>
        ))}
        <>
          {bullFightSubvalue.map((value, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg pb-4">{value.header}</h3>
              {value.header === '(2) 카드조합 및 서열' && (
                <div>
                  <ol className="list-decimal pl-10">
                  {value.content.map((contentItem, contentIndex) => (
                    <div key={contentIndex} className="mb-4">
                      {contentIndex === 2 && Array.isArray(contentItem.subContent) ? (
                        <div className='pl-5'>
                          <h3 className="font-bold text-md pb-2">
                            {contentItem.subContent[0]}
                          </h3>
                          {contentItem.subContent.slice(1).map((subContentItem, subContentIndex) =>(
                            <p key={subContentIndex} className="text-sm mb-2">
                              {subContentItem}
                            </p>
                          ))}
                        </div>
                        ) : (
                        contentItem.subContent && (
                            <li key={contentIndex}  className=" text-sm ">{contentItem.subContent}</li>
                        )
                      )}
                    </div>
                  ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
          <div className="table-container">
            <h2 className="text-center font-bold py-2 bg-[#ccc] border-black border">{bullFightTable.header}</h2>
            <table className="table-auto border-collapse w-full border-black border text-center table-fixed">
              <thead>         
                <tr>
                  <th colSpan={2} className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable.columns[0].header}</th>
                  <th colSpan={2} className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable.columns[1].header}</th>
                </tr>
                <tr>
                  <th className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable.columns[0].data[0].subHeader}</th>
                  <th className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable.columns[0].data[1].subHeader}</th>
                  <th className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable.columns[1].data[0].subHeader}</th>         
                  <th className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable.columns[1].data[1].subHeader}</th>
                </tr>
              </thead>
              <tbody>
              {bullFightTable.columns[0].data[0].subValue.map((value, index) => (
                <tr key={index}>
                  <td className="border border-black px-4 py-2 text-red-700">{value}</td>
                  <td className="border border-black px-4 py-2 text-red-700">{bullFightTable.columns[1].data[0].subValue[index]}</td>
                  <td className="border border-black px-4 py-2 text-red-700">{bullFightTable.columns[0].data[1].subValue[index]}</td>
                  <td className="border border-black px-4 py-2 text-red-700">{bullFightTable.columns[1].data[1].subValue[index]}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <>
            {bullFight_2.map((content, index) =>(
              <div key={index} className="mb-4">
                {Array.isArray(content[0]) && content[0].map((value1, subIndex1) =>(
                  <li key={subIndex1} className="list-decimal text-sm mb-2">{value1}</li>
                ))}
                {Array.isArray(content[1]) && content[1].map((value2, subIndex2) =>(
                  <p key={subIndex2} className="list-decimal text-sm mb-2">{value2}</p>
                ))}
              </div>
            ))}
          </>
          <div>
              <table className="table-auto border-collapse w-full border-black border text-center table-fixed">
                <thead>
                  <tr>
                    <th colSpan={3} className="border border-black px-4 py-2 bg-[#ccc]">{bullFightTable_2.header}</th>  
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
        </>
      </ScrollArea>
    </div>
  );
}
