import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import Image from '../components/Image'
import CommonHeading from '../components/CommonHeading'
import { FaGreaterThan } from "react-icons/fa6";
import CartList from '../components/CartList'
import { FaTimes } from 'react-icons/fa';
import ProductOne from '../assets/product1.png'
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import Button from './../components/Button';
import ArrowPages from '../components/ArrowPages'

const Cart = () => {
  return (
    <section>
      <Container>
      <CommonHeading className='pt-5' text='Cart'/>
        <ArrowPages prevPage='Home' nextPage='Cart'/>
        <table className='my-20'>
          <Flex className="w-[1600px] bg-[#F5F5F3] px-5 py-7">
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

          <Flex className="w-[1600px] px-5 bg-white items-center border-2 border-[#F0F0F0]">
            <div className="w-[25%] flex flex-row items-center gap-x-4">
              <FaTimes size={20} className='text-primary' />
              <Image className='w-[100px] h-[100px]' src={ProductOne}/>
              <CartList cartdata='Product name'/>
            </div>
            <div className="w-[25%]">
              <span className='flex flex-row font-dm font-bold gap-x-2 text-[20px]'>$<CartList price='44.58'/></span>
            </div>
            <div className="w-[25%]">
            <Flex className='justify-center items-center text-[#767676] gap-x-8 py-2 border border-[#EAEAEA] w-[45%]'>
              <BiPlus/>
              <CartList quantity='1'/>
              <BiMinus/>
            </Flex>
            </div>
            <div className="w-[25%]">
            <span className='flex flex-row font-dm font-bold gap-x-2 text-[20px]'>$<CartList total='44.58'/></span>
            </div>
          </Flex>

          <Flex className="w-[1600px] px-4 py-6 pb-5 items-center gap-x-4 border-2 border-t-0 border-[#F0F0F0]">
            <div className="w-[15%]">
              <div className='flex flex-row py-3 px-3 justify-between items-center text-[#767676] gap-x-8 border border-[#EAEAEA]'>
                <CartList quantity='SIZE' className='font-normal '/>
                <FaCaretDown/>          
              </div>
            </div>
            <div className="w-[15%]">
              <CartList cartdata='Apply cuppon'/>
            </div>
            <div className="w-[70%] flex justify-end">
              <CartList cartdata='Update Cart'/>
            </div>
          </Flex>

          <Flex className='pt-16 pb-7'>
            <div className="w-full px-4 flex justify-end">
              <CartList carthead='Cart totals'/>
            </div>
          </Flex>
 
          <div className="cartTable">
            <Flex className='w-[100%] flex justify-end'>
              <div className="w-[20%] py-6 px-4 items-center border-2 border-[#F0F0F0]">
                <CartList className='font-extrabold' carthead='Subtotal'/>
              </div>
              <div className="w-[20%] py-6 px-4 items-center border-2 border-l-0 border-[#F0F0F0]">
                <div className='flex flex-row items-center gap-x-2'>
                  <CartList subdollar='389.99'/>
                  <CartList subdollar='$'/>
                </div>
              </div>
            </Flex>

            <Flex className='w-[100%] flex justify-end'>
              <div className="w-[20%] py-6 px-4 items-center border-2 border-t-0 border-[#F0F0F0]">
              <CartList className='font-extrabold' carthead='Total'/>
              </div>
              <div className="w-[20%] py-6 px-4 items-center border-2 border-t-0 border-l-0 border-[#F0F0F0]">
                <div className='flex flex-row items-center gap-x-2'>
                  <CartList totaldollar='389.99'/>
                  <CartList totaldollar='$'/>
                </div>
              </div>
            </Flex>

            <Flex className="w-[100%] flex justify-end pt-[30px] pb-[130px]">
              <Button text='Proceed to Checkout'/>
            </Flex>

          </div>   
        </table>
        
      </Container>
    </section>
  )
}

export default Cart