import { useState } from "react";
import AllPlayers from "../AllPlayers/AllPlayers";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const ToggleBtn = ({handleToggleBtn, isActive, handleChoosePlayer, choosePlayer, handleRemove, coin}) => {
    
  return (
    <div>
      <div className=' w-11/12 mx-auto flex justify-between items-center mb-9'>
          <div>
            {isActive.player ? <h2 className='font-bold text-base'>Available Player</h2> :
            <h2 className='font-bold text-base'>Selected Player {choosePlayer.length}/7</h2>}
          </div>

          <div className='flex gap-0 border-2 rounded-lg'>
            <button onClick={()=>handleToggleBtn('available')} 
            className={`${isActive.player? "btn h-full bg-yellow-400 rounded-r-none" : "btn h-full rounded-r-none"}`}>
              Available</button>

            <button onClick={()=> handleToggleBtn('selected')}
            className={`${!isActive.player ? "btn rounded-l-none bg-yellow-400" : "btn rounded-l-none bg-white"}`}>Selected ({choosePlayer.length})</button>
          </div>
      </div>
      <div>
        {
          isActive.player ? <AllPlayers handleChoosePlayer={handleChoosePlayer} coin={coin}></AllPlayers> : <SelectedPlayer choosePlayer={choosePlayer} handleRemove={handleRemove} handleToggleBtn={handleToggleBtn}></SelectedPlayer>
        }
      </div>
    </div>
  );
};

export default ToggleBtn;