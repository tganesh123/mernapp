import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Games = () => {
  let [gameName, setGame] = useState("")
  let [playerName, setPlayer] = useState("")
  const gameStore = useSelector(store => store)
  let { game, player } = gameStore
  const dispatch = useDispatch()

  return (
    <div className='flex justify-center items-center '>
      <div className='flex w-2/5 h-96 flex-col justify-center items-center border-2 border-emerald-500 rounded-lg mt-10'>
        <input
          className='border-2 border-black mb-3 h-[10%] rounded-md'
          type='text'
          onChange={e => setGame(e.target.value)}
        />
        <button
          className='flex bg-emerald-700 p-3 rounded-lg h-[7%] items-center justify-center'
          onClick={() =>
            dispatch({
              type: "UP_Game",
              payload: gameName,
            })
          }
        >
          updateGame
        </button>
        <span className='mt-5 bg-blue-400 bg-blend-color-burn'>
          Game: {game}
        </span>
        <input type='text' onChange={e => setPlayer(e.target.value)} />
        <button
          className='bg-emerald-400 p-3 rounded '
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
    </div>
  )
}

export default Games
