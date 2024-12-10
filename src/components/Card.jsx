import React from "react"

const Card = props => {
  console.log(props.username)
  return (
    <div className="mr-7 bg-white inline-block text-black p-6 text-center rounded">
      <img
        className="ml-8 h-32 w-32 rounded-full mb-3"
        src={props.photo}
        alt=""
      />
      <h1 className="text-2xl font-semibold mb-4">{props.username}</h1>
      <h2 className="text-blue-300">{props.prof}</h2>
      <h2>
        {props.age}, {props.city}
      </h2>
      <button className="mt-5 bg-emerald-700 text-white px-4 py-3 rounded font-medium">
        add friend
      </button>
    </div>
  )
}

export default Card
