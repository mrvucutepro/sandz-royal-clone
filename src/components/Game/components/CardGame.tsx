import * as React from 'react';

import { Button } from '@nextui-org/react';

// import ProfileUser from "@/components/Home/components/ProfileUser";

export function CardGame({ cardTitle, cardImage, gameLogo }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image-container">
          <img className="image-glass" src="/assets/image/gamezone-glass.png" />
          <img src={cardImage} className="card-image" alt="Game" />
          {/* <p className="card-title">{cardTitle}</p> */}
          <img className="card-title" src={gameLogo} />
          <div className="card-overlay">
            <p className="overlay-text">Game Start</p>
          </div>
          <div className="button-right">
            <Button className="action-button text-xs">출금신청</Button>
          </div>

          <div className="button-left">
            <Button className="action-button text-xs">입금신청</Button>
          </div>
        </div>
        <div className="card-footer">
          <p className="card-footer-text">{cardTitle}</p>
          <p className="card-footer-subtext">마이크로슬롯</p>
        </div>
      </div>
    </div>
  );
}
