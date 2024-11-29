import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const news = [
    "[한가위 이벤트] 풍성하게 즐기는...",
    "[UNION 게임] 런칭기념 실시간 올...",
    "두근두근 전화데이트 EVENT",
    "[한가위 이벤트] 풍성하게 즐기는...",
    "[UNION 게임] 런칭기념 실시간 올...",
    "두근두근 전화데이트 EVENT",
    "[한가위 이벤트] 풍성하게 즐기는...",
    "[UNION 게임] 런칭기념 실시간 올...",
    "두근두근 전화데이트 EVENT"
]

export function ScrollBoard() {
  return (
    <ScrollArea className="h-32 w-full border">
      <div className="p-4">
        {news.map((value, index) => (
          <div key={index}>
            <div className="flex items-center gap-2">
                <strong>[이벤트]</strong>
                <div className="text-sm">
                    {value}
                </div>
            </div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
