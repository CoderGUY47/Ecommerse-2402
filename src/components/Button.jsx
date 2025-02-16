import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`w-[200px] bg-[#262626] py-4 text-white text-base font-dm font-bold hover:bg-transparent border border-transparent
      hover:border-[#262626] hover:text-[#262626] duration-300 ${className}`}>{text}</button>
  )
}

export default Button