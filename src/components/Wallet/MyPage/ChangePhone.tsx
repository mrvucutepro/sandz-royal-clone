import React from 'react'
import { CardContent } from '@/components/ui/card';
import { Input } from '@nextui-org/react';
import { Label } from '@radix-ui/react-label';

export default function ChangePhone() {
  return (
    <div><CardContent className="space-y-2">
    <div className="space-y-1">
      <Label htmlFor="name">Name</Label>
      <Input id="name" defaultValue="Pedro Duarte" />
    </div>
    <div className="space-y-1">
      <Label htmlFor="username">Username</Label>
      <Input id="username" defaultValue="@peduarte" />
    </div>
  </CardContent></div>
  )
}
