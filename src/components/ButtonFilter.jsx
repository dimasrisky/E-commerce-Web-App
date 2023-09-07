import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonFilter = ({ value }) => {
  return (
    <NavLink to={`category/${ value }`}>
        <button className="px-10 py-1 border border-white text-white focus:bg-white hover:bg-white hover:text-black focus:text-black rounded-md transition duration-200">{ value }</button>
    </NavLink>
  )
}

export default ButtonFilter