import * as React from 'react';

import { Button } from '@nextui-org/react';
import { useAuth } from '@/lib/context/AuthContext';
import { useRouter } from 'next/navigation';


export function CardGame({ cardTitle, cardImage, gameLogo, handlePlayGame, gameID, position }) {
  const { user, onOpenLogin } = useAuth();
  const router = useRouter();
  const events = [
    {
      title: '출금신청',
      link: '/withdraw',
    },
    {
      title: '입금신청',
      link: '/deposit',
    }
  ]

  const handleDepositOrWithdrawl = (title: string) => {
    if (!user) {
      onOpenLogin();
    } else {      
      if( title === '출금신청'){
        router.push("/withdraw");
      }else{
        router.push("/deposit");
      }
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image-container">
          <img className="image-glass" src="/assets/image/gamezone-glass.png" />
          <img
            className="card-image"
            style={{
              backgroundImage: `url(/assets/image/gamezone-bg.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: position
            }}
          />
          <img className="card-title" src={gameLogo} />
          <div className="card-overlay">
            <button type='button' onClick={() => handlePlayGame(gameID)} className="overlay-text">Game Start</button>
          </div>
          {events.map((event, index) => (
            <div key={index} className={`button-${event.title === '출금신청' ? 'right' : 'left'}`}>
              <Button 
                onClick={() => handleDepositOrWithdrawl(event.title)} 
                className="action-button text-xs"
              >
                {event.title}
              </Button>
            </div>
          ))}
        </div>
        <div className="card-footer">
          <p className="card-footer-text">{cardTitle}</p>
          <p className="card-footer-subtext">마이크로슬롯</p>
        </div>
      </div>
      </div>
  );
}
