import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const AllPlayers = ({handleChoosePlayer, coin}) => {
  const [allPlayers, setAllPlayers] =useState([]);

  useEffect(()=>{
    fetch('playerData.json')
    .then(res => res.json())
    .then(data => setAllPlayers(data))
  }, [])
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        allPlayers.map(player => <Player handleChoosePlayer={handleChoosePlayer} key={player.playerId} player={player} coin={coin}></Player>)
      }
    </div>
  );
};

export default AllPlayers;