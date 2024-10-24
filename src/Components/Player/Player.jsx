import React from 'react';

const Player = ({player}) => {
  const {name, country, image, playerType, playingStyle, biddingPrice} = player;
  return (
    <div>
      <div className="card border-2 p-5">
        <figure className="h-64">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full h-full object-cover" />
        </figure>
        <div className="">
          <h2 className="font-bold text-xl mt-4"><i className="fa-solid fa-user-large"></i>
          &nbsp;&nbsp;{name}</h2>
          <div className='mt-3 flex justify-between items-center'>
            <p className='font-semibold text-base'><i className="fa-solid fa-flag"></i>&nbsp;&nbsp;{country}</p>
            <button className='btn btn-sm'>{playerType}</button>
          </div>
          <hr className='my-4 w-full'/>
          <h3 className='font-semibold text-base'>Rating</h3>
          <div className='flex items-center justify-between mt-3'>
            <p className='font-semibold text-sm'>Playing Style</p>
            <p className='font-semibold text-sm text-gray-500'>{playingStyle}</p>
          </div>
          <div className="card-actions flex items-center justify-between mt-5">
            <p className='font-semibold text-sm'>Price: ${biddingPrice}</p>
            <button className="btn btn-sm">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;