import React from 'react'

const CartList = ({carthead, cartdata,price, quantity, total, subdollar, totaldollar, className}) => {
  return (
    <div>
        <h5 className={`font-dm font-semibold text-base text-primary ${className}`}>{carthead}</h5>
        <p className={`font-dm font-semibold text-base text-primary ${className}`}>{cartdata}</p>
        <p className={`font-dm font-bold text-[20px] text-primary ${className}`}>{price}</p>
        <p className={`font-dm font-semibold text-base text-[#767676] ${className}`}>{quantity}</p>
        <p className={`font-dm font-bold text-[20px] text-primary ${className}`}>{total}</p> 
        <p className={`font-dm font-normal text-base text-[#767676] ${className}`}>{subdollar}</p> 
        <p className={`font-dm font-medium text-base text-primary ${className}`}>{totaldollar}</p> 
    </div>
  )
}

export default CartList