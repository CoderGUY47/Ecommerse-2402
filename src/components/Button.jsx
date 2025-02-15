import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`w-[200px] bg-black py-4 px-16 text-white text-base font-dm font-bold hover:bg-transparent border border-transparent
      hover:border-black hover:text-black duration-300 ${className}`}>{text}</button>
  )
}

export default Button