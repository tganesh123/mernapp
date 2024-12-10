import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="py-7 px-10 bg-emerald-600 text-white flex justify-between">
      <h2 className="text-2xl">react prac</h2>
      <div className="flex gap-10">
        <Link to="/">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/home">home</Link>
        <Link to="/contacts">context</Link>
      </div>
    </div>
  )
}

export default Header
