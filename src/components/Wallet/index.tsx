"use client";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useState } from "react";
import { TabWallet } from "./TabWallet";

interface WalletProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function WalletComponent({ isOpen, onOpenChange }: WalletProps) {

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent className="bg-[#eee] max-w-6xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-2 justify-evenly">
                <div className="flex justify-start">
                    My wallet
                </div>
                <div className="flex justify-between gap-2">
                    <TabWallet/>
                </div>
              </ModalHeader>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}