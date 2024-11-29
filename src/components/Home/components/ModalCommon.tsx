import React from 'react'
import {Modal, ModalContent} from "@nextui-org/react";

export default function ModalCommon({isOpen, onOpenChange, children }:{ isOpen: boolean, onOpenChange: (isOpen: boolean) => void, children: React.ReactNode}) {
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {children}
                </ModalContent>
            </Modal>
        </>
    );
}
