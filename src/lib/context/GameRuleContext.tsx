"use client"

import { createContext, ReactNode, useContext, useState } from 'react';

interface GameRuleContextType {
  statusRule: string;
  activeGame: string | null; 
  setActiveGame: (gameId: string | null) => void; 
  contentGameRule: {
    type: string;
    content: any | null; 
  };
  contentSupportRule: {
    type: string;
    content: any | null; 
  };
  selectModal: (modal: any, menuType: string) => void;
}
export const GameRuleContext = createContext<GameRuleContextType | undefined>(undefined);
export const ModalGameProvider = ({ children }: {children: ReactNode}) => {
  const [statusRule, setStatusRule] = useState("/assets/image/rule.png");
  const [activeGame, setActiveGame] = useState<string | "casino">("casino");
  const [contentGameRule, setContentGameRule] = useState<{
    type: string;
    content: ReactNode; 
  }>({
      type: 'modal',
      content: <img src="/assets/image/rule.png"/>
  });

  const [contentSupportRule, setContentSupportRule] = useState<{
    type: string;
    content: ReactNode; 
  }>({
    type: 'modal',
    content:null
  })


  const selectModal = (modalContent: ReactNode | null, type: string) => {
    if (type === 'game') {
      setContentGameRule({
        type,
        content: modalContent || <img src={statusRule} />,
      });
    }else{
      setContentSupportRule({
        type,
        content: modalContent,
      });
    }
  };

  
  return (
    <GameRuleContext.Provider value={{ statusRule, setStatusRule ,contentGameRule, selectModal, activeGame, setActiveGame, contentSupportRule }}>
      {children}
    </GameRuleContext.Provider>
  );
};

export const useGameRuleContext = () => {
  // return useContext(GameRuleContext);
  const context = useContext(GameRuleContext);
  if (!context) {
    throw new Error(
      'useGameRuleContext must be used within a ModalProvider'
    );
  }
  return context;
};
