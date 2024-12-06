import Baccarat from '@/components/AnotherMenu/components/GameRule/Baccarat';
import { createContext, useContext, useState } from 'react';
import { eventTab } from '../constants';

export const GameRuleContext = createContext();

export const ModalProvider = ({ children }) => {
  const [contentGameRule, setContentGameRule] = useState(
    {
      type: 'modal',
      // content:<img src="/assets/image/rule.png"/>
      content:null
    }
  );
  const selectModal = (modal) => {
    setContentGameRule({ type: 'modal', content: modal });
  };  

  return (
    <GameRuleContext.Provider value={{ contentGameRule, selectModal }}>
      {children}
    </GameRuleContext.Provider>
  );
};

export const useGameRuleContext = () => {
  return useContext(GameRuleContext);
};
