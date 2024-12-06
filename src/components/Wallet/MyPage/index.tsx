import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,

} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ChangePassword from './ChangePassword'
export default function MyPage() {

  return (
    <div className='w-[100%]'>
      <Tabs defaultValue="account" className="w-[100%]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="password">회원가입정보</TabsTrigger>
        <TabsTrigger value="phone">휴대폰변경</TabsTrigger>
        <TabsTrigger value="bank">고객계좌관리</TabsTrigger>
      </TabsList>
      <div className='max-w-[100%]'>
        <TabsContent value="password">
          <Card>
            <ChangePassword/>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
    </div>
  )
}
