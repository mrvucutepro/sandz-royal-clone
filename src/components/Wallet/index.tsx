"use client";

import { DialogTitle } from "@radix-ui/react-dialog";
import { TabWallet } from "./TabWallet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@nextui-org/react";
interface WalletProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function WalletComponent({ isOpen, onOpenChange }: WalletProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#eee] max-w-6xl h-[80%] overflow-y-auto pt-0">
        <DialogHeader>
          <VisuallyHidden>
            <DialogTitle>
            </DialogTitle>
          </VisuallyHidden>
          <TabWallet />
        </DialogHeader>
      </DialogContent>
    </Dialog>

  );
}