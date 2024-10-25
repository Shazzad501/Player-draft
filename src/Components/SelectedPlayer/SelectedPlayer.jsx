import AllPlayers from "../AllPlayers/AllPlayers";

const SelectedPlayer = ({choosePlayer, handleRemove, handleToggleBtn}) => {
  return (
    <div className="w-11/12 mx-auto flex flex-col gap-5">
      {
        choosePlayer.map(player =><div key={player.playerId} className="w-full p-6 rounded-xl border-2 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-lg">
            <img className="w-full h-full object-cover rounded-lg" src={player.image} alt="" />
            </div>
            <div>
              <h2 className="font-bold text-xl">{player.name}</h2>
              <p className="font-semibold text-sm text-gray-400">{player.playingStyle}</p>
            </div>
          </div>
          <button 
          onClick={()=>handleRemove(player.playerId)}
          className="btn btn-sm font-bold text-base text-red-600">
            <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>)
      }
      <button
      onClick={()=>handleToggleBtn('available')}
       className="btn bg-yellow-400 w-[150px]">Add more plyer</button>
    </div>
  );
};

export default SelectedPlayer;