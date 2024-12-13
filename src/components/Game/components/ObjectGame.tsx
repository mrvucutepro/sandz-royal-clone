import React from 'react'

export default function ObjectGame({ isActive, imageSet, onSetActive, gameId }) {

    const handleClick = () => {
        if (!isActive) {
            onSetActive(gameId);             
        }
    };
    

    return (
      <div
        className="relative inline-block group cursor-pointer"
        data-status={isActive ? 'active' : 'unactive'}
        onClick={handleClick}
      >
        <img
          src={isActive ? imageSet.active : imageSet.unactive}
          className="object-img"
        />
        
        {!isActive && (
          <img
            src={imageSet.active}
            className="absolute top-0 left-0 hidden group-hover:block"
          />
        )}
      </div>
    );
}


