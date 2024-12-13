import { sikbo } from '@/lib/constants/GameRule';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import React from 'react';

export default function Sikbo() {
  return (
    <div className="text-[#666]">
      <p className="font-bold text-2xl pb-2">블랙잭 게임방법</p>
      <ScrollArea className="bg-white max-h-[400px] overflow-y-auto rounded-sm p-4">
        {sikbo.map((value, key) => (
          <div key={key} className="mb-4">
            {value.header === '' && Array.isArray(value.content) ? (
              <>
                {value.content.map((item, index) => (
                  <li className="list-decimal	text-sm" key={index}>
                    {item}
                  </li>
                ))}
              </>
            ) : (
              <table className="table-auto w-full border-collapse">
                {Array.isArray(value.header) && (
                  <>
                    <thead>
                      <tr>
                        {value.header.map((itemHeader, index) => (
                          <th
                            key={index}
                            className="bg-[#ccc] border border-black text-black px-4 py-2"
                          >
                            {itemHeader}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                    <tr>
                    {Array.isArray(value.content?.left) &&
                        value.header.includes('Specific') &&
                        value.content?.left.map((leftValue, index) => (
                            <>
                                <td key={index} className="border border-gray-300 px-4 py-2">
                                {leftValue}
                                </td>
                                <td  key={index} className="border border-gray-300 px-4 py-2">
                                {value.content.center ? value.content.center[index] : "N/A"}
                                </td>
                                <td key={index} className="border border-gray-300 px-4 py-2">
                                {value.content?.right[index]}
                                </td>
                            </>
                    ))}
                    </tr>
                    <tr>
                    {Array.isArray(value.content?.left) &&
                        value.header.includes('Combination') &&
                        value.content?.left.map((leftValue, index) => (
                            <>
                                <td key={index} className="border border-gray-300 px-4 py-2">
                                {leftValue}
                                </td>
                                <td  key={index} className="border border-gray-300 px-4 py-2">
                                {value.content.center ? value.content.center[index] : "N/A"}
                                </td>
                                <td key={index} className="border border-gray-300 px-4 py-2">
                                {value.content?.right[index]}
                                </td>
                            </>
                    ))}
                    </tr>
                    </tbody>
                  </>
                )}
              </table>
            )}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
