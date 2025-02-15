import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import List from '../components/List'
import Image from '../components/Image'
import FooterLogo from '../assets/footerLogo.png'
import CommonHeading from '../components/CommonHeading'
import { FaGreaterThan } from "react-icons/fa6";
import CartList from '../components/CartList'
import { FaTimes } from 'react-icons/fa';
import ProductOne from '../assets/product1.png'
import { BiMinus, BiPlus } from "react-icons/bi";

const Cart = () => {
  return (
    <section>
      <Container>
      <CommonHeading className='pt-5' text='Cart'/>
        <div className='justify-center items-center mb-4'>
          <Flex className="items-center gap-1 text-sm text-[#767676] font-dm font-normal">
            <Link to="/" className="font-dm font-semibold hover:text-primary duration-500">Cart</Link> 
            <FaGreaterThan className='text-primary font-semibold text-[8px]'/>
            <span>Cart</span>
          </Flex>
        </div>

        <table className='my-20'>
          <Flex className="w-[1600px] bg-[#F5F5F3] px-2 py-7">
            <div className="w-[25%]">
              <CartList carthead='Product'/>
            </div>
            <div className="w-[25%]">
              <CartList carthead='Price'/>
            </div>
            <div className="w-[25%]">
              <CartList carthead='Quatity'/>
            </div>
            <div className="w-[25%]">
              <CartList carthead='Total'/>
            </div>

          </Flex>

          <Flex className="w-[1600px] bg-white pb-5 flex flex-row items-center gap-x-4 border-2 border-[#F0F0F0]">
            <div className="w-[25%] flex flex-row items-center gap-x-4">
              <FaTimes size={20} className='text-primary' />
              <Image className='w-[100px] h-[100px]' src={ProductOne}/>
              <CartList cartdata='Product name'/>
            </div>
            <div className="w-[25%]">
              <span className='flex flex-row font-dm font-bold text-[20px]'>$<CartList price='44.58'/></span>
            </div>
            <div className="w-[25%]">
            <Flex className='justify-center items-center text-[#767676] gap-x-8 py-2 border border-[#7676768c] w-[45%]'>
              <BiPlus/>
              <CartList quantity='1'/>
              <BiMinus/>
            </Flex>
            </div>
            <div className="w-[25%]">
            <span className='flex flex-row font-dm font-bold text-[20px]'>$<CartList total='44.58'/></span>
            </div>

          </Flex>
        </table>
        
      </Container>
    </section>
  )
}

export default Cart