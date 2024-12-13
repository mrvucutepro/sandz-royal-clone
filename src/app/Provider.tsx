'use client';
import React from 'react';

import { AuthProvider } from '@/lib/context/AuthContext';
import { WalletProvider } from '@/lib/context/WalletContext';
import { ModalGameProvider } from '@/lib/context/GameRuleContext';
import { ToastContainer } from 'react-toastify';
import NextUiProvider from './NextUiProvider';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUiProvider>
      <AuthProvider>
        <WalletProvider>
          <ModalGameProvider>
            {children} <ToastContainer />
          </ModalGameProvider>
        </WalletProvider>
      </AuthProvider>
    </NextUiProvider>
  );
};
