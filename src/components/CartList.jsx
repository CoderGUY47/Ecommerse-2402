import React from 'react'

const CartList = ({carthead, cartdata,price, quantity, total, className, text}) => {
  return (
    <div>
      <table>
        <h5 className={`font-dm font-semibold text-base text-primary ${className, text}`}>{carthead}</h5>
        <p className={`font-dm font-semibold text-base text-primary ${className, text}`}>{cartdata}</p>
        <p className={`font-dm font-bold text-[20px] text-primary ${className, text}`}>{price}</p>
        <p className={`font-dm font-semibold text-base text-[#767676] ${className, text}`}>{quantity}</p>
        <p className={`font-dm font-bold text-[20px] text-primary ${className, text}`}>{total}</p>
      </table>
    </div>
  )
}

export default CartList