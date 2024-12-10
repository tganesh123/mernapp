import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Games = () => {
  let [gameName, setGame] = useState("")
  let [playerName, setPlayer] = useState("")
  const gameStore = useSelector(store => store)
  let { game, player } = gameStore
  const dispatch = useDispatch()

  return (
    <div className="flex h-96 flex-col justify-center items-center">
      <input type="text" onChange={e => setGame(e.target.value)} />
      <button
        className="bg-emerald-400 p-3 rounded "
        onClick={() =>
          dispatch({
            type: "UP_Game",
            payload: gameName,
          })
        }
      >
        updateGame
      </button>
      <span>Game:{game}</span>
      <input type="text" onChange={e => setPlayer(e.target.value)} />
      <button
        className="bg-emerald-400 p-3 rounded "
        onClick={() =>
          dispatch({
            type: "UP_Player",
            payload: playerName,
          })
        }
      >
        updatePlayer
      </button>
      <span>Player:{player}</span>
    </div>
  )
}

export default Games
