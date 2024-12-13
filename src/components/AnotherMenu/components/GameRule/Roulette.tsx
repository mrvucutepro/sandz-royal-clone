import {  roulette } from '@/lib/constants/GameRule';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import React from 'react';

export default function Roulette() {
    return (
        <div className="text-[#666]">
          <p className="font-bold text-2xl pb-2">블랙잭 게임방법</p>
          <ScrollArea className="bg-white max-h-[400px] overflow-y-auto rounded-sm p-4">
            {roulette.map((items, keyItems) =>
              items.title === "" ? (
                <div key={keyItems}>
                  <h3 className="text-lg font-bold mb-2">{items.title}</h3>
                  {Array.isArray(items.content) && (
                    <div key={keyItems}>
                      <ol className="list-decimal">
                        {items.content.map((item, keyItem) => (
                          <li key={keyItem} className="mx-10 mb-2 text-sm">
                            {item}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              ) : (
                <div className="" key={keyItems}>
                  <h3 className="text-lg font-bold mb-2">{items.title}</h3>
                  {typeof items.content === "object" && items.content !== null ? (
                    <>
                      <p className="pb-3 text-sm">{items.content.text_1}</p>
                      <p className="pb-2 text-sm">{items.content.text_2}</p>
                      {Array.isArray(items.content.table[0]?.left) &&
                        Array.isArray(items.content.table[1]?.right) && (
                          <table className="table-fixed border-collapse border border-gray-300">
                            <tbody>
                              {items.content.table[0].left.map((leftItem, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {leftItem}
                                    </td>
                                    {(index === 9 || index === 10) ? (
                                      <td
                                          className="border border-gray-300 px-4 py-2 text-red-600"
                                          rowSpan={3}
                                          >
                                          {items.content.table[1].right[index]}
                                      </td>
                                    ):(
                                      <td className="border border-gray-300 px-4 py-2 text-red-600 ">
                                          {items.content.table[1].right[index]}
                                      </td>
                                    )}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                    </>
                  ) : null}
                </div>
              )
            )}
          </ScrollArea>
        </div>
      );
}
