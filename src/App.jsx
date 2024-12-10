// import axios from "axios"
// import React, { useState } from "react"

// const App = () => {
//   const [data, setdata] = useState([])
//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list")
//     setdata(response.data)
//   }
//   return (
//     <div className="p-5">
//       <button
//         onClick={() => {
//           getData()
//         }}
//         className="bg-teal-700 text-white font-semibold text-2xl px-6 py-4 rounded active:scale-90"
//       >
//         get data
//       </button>
//       <div className="p-5 mt-5 bg-gray-900">
//         {data.map(function (elem, idx) {
//           return (
//             <div
//               key={idx}
//               className="bg-gray-100 text-black flex items-center justify-between w-full px-7 py-6 mb-3"
//             >
//               <img className="h-40" src={elem.download_url} />
//               <h1>{elem.author}</h1>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default App
// import React from "react"
// import { Route, Routes } from "react-router-dom"
// import About from "./pages/About"
// import Contacts from "./pages/Contacts"
// import Header from "./components/Header"

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<About />} />
//         <Route path="/contacts" element={<Contacts />} />
//       </Routes>
//     </div>
//   )
// }

// export default App
// import React, { useContext } from "react"
// import { DataContext } from "./context/UserContext"
// import Footer from "./components/Footer"
// import Section from "./components/Section"

// const App = () => {
//   const data = useContext(DataContext)
//   console.log(data)
//   return (
//     <div>
//       <h1>This is App.jsx {data}</h1>
//       <Section />
//       <Footer />
//     </div>
//   )
// }

// export default App

import React from "react"
import { createStore } from "redux"
import gameReducer from "./redux/GameReducer"
import { Provider } from "react-redux"
import Games from "./redux/Games"

const App = () => {
  const myStore = createStore(gameReducer)
  return (
    <>
      <Provider store={myStore}>
        <Games />
      </Provider>
    </>
  )
}

export default App
