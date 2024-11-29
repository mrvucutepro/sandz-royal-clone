"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,

} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLogin } from "@/lib/context/AuthContext"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function LoginFormDialog() {
  const { showLoginModal, setShowLoginModal } = useLogin();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  const handleLogin = (e : React.FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    const username = form.username.value;
    const password = form.password.value;
  }

  return (
    <Dialog open={showLoginModal} onOpenChange={(isOpen) => !isOpen && setShowLoginModal(false)}>
      <DialogContent>
        <DialogHeader>
          <img className="h-10 w-10" src="/assets/image/logo2.png"></img>
          <DialogTitle>Login Form</DialogTitle>
        </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4">
              <Input name="username" placeholder="Enter your username" required />
              <Input name="password" type="password" placeholder="Enter your password" required />
              <Button type="submit" className="submit-button">
                Submit
              </Button>
          </form>
      </DialogContent>
    </Dialog>
  )
}
