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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="bg-[#eee] max-w-6xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-2 justify-evenly items-center">
                <div className="">
                    My wallet
                </div>
                <div className="flex justify-between gap-2">
                    <TabWallet/>
                </div>

              </ModalHeader>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}