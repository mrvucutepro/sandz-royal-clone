"use client"

import { createContext, ReactNode, useContext, useState } from 'react';

interface WalletContextType {
    walletRule: {
        type: string;
        content: any | null; 
    };
    setWalletRule: (gameId: string | null) => void; 
    contentSupportRule: {
        type: string;
        content: any | null; 
    };
    modal: React.ReactNode | null;
    selectModal: (modal: any, menuType: string) => void;
}
export const WalletContext = createContext<WalletContextType | undefined>(undefined);
export const WalletProvider = ({ children }: {children: ReactNode}) => {
    const [modal, setModal] = useState<React.ReactNode | null>(null);
    const [modalType, setModalType] = useState<string | null>(null);

    const selectModal = (newModal: React.ReactNode | null, type: string) => {
        setModal(newModal);
        setModalType(type);
    };
  
    return (
        <WalletContext.Provider value={{ modal, selectModal,  }}>
        {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error(
      'useWalletContext must be used within a ModalProvider'
    );
  }
  return context;
};
