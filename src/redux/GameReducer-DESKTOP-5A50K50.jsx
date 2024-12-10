const initialData = {
  game: "Football",
  player: "Messi",
}
const gameReducer = (state = initialData, action) => {
  switch (action.type) {
    case "UP_Game":
      return { ...state, game: action.payload }
    case "UP_Player":
      return { ...state, player: action.payload }
    default:
      return { ...state }
  }
}
export default gameReducer
