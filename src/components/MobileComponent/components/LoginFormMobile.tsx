import { Button, Input } from '@nextui-org/react'
import React from 'react'

export default function LoginFormMobile() {
  return (
    <div className='grid items-center justify-center '>
        <p className='text-lg font-bold'>Login Form</p>
        <div>
            <Input placeholder='username' className='border rounded-sm mb-5'/>
            <Input placeholder='username' className='border rounded-sm mb-5'/>
            <Button>Submit</Button>
        </div>
    </div>
  )
}
