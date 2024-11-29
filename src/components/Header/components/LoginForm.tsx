"use client"
import {useState} from "react"

import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import { useScreen } from "@/lib/hooks/useScreen"

const formSchema = z.object({
  name_9424175691: z.string(),
  name_2283286347: z.string()
});

export default function MyForm() {
  const isXl = useScreen('xl'); 

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),

  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
      console.log(values);
  }

  return (
    <div className="relative h-96 z-0 bg-[#111316]/50">
        <div className="absolute inset-0 z-10 p-8">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto py-10">
                
                <FormField
                control={form.control}
                name="name_9424175691"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input 
                        placeholder="User Name"
                        
                        type=""
                        {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                
                <FormField
                control={form.control}
                name="name_2283286347"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input 
                        placeholder="Password"
                        type=""
                        {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="p-10 text-lg font-bold text-[#000] hover:text-white hover bg-[#c79f5f] hover:bg-[#f4d198] w-full rounded-none">Login</Button>
                <a className="text-[#d2d2d2] hover:text-white">ID/PW찾기</a>
            </form>
            </Form>
        </div>
    </div>

  )
}