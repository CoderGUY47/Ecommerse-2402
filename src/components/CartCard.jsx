import React from 'react'
import CartOne from '../assets/cart1.png'
import Image from './Image'
import Flex from './Flex'
import { FaHeart } from 'react-icons/fa'

const CartCard = () => {
  return (
    <div className='w-[370px] h-[465px] relative group '>
        <div className='z-10 absolute top-5 left-5 bg-black py-3 px-8 text-white text-base font-dm font-bold'>New</div>
        <div className='w-[370px] h-[370px] relative'>
        <Image className='w-full' src={CartOne}/>
        <div className='absolute -bottom-1/3 left-0 w-full h-1/3 bg-white group-hover:bottom-0 duration-300 opacity-0 group-hover:opacity-100 invisible group-hover:visible'>
        <ul className='flex items-end flex-col p-8'>
       <Flex className='py-1 items-center gap-x-2'>
       <li>Add to Wish List </li><FaHeart />
       </Flex>
       <Flex className='py-1 items-center gap-x-2'>
       <li>Compare </li><FaHeart />
       </Flex>
       <Flex className='py-1 items-center gap-x-2'>
       <li>Add to Cart </li><FaHeart />
       </Flex>
       
        
        </ul>
        </div>
        </div>

        <Flex className='justify-between pt-6 pb-3'>
            <h3 className='text-xl text-[#262626] font-dm font-bold'>Basic Crew Neck Tee</h3>
            <p className='text-base text-[#767676] font-dm font-normal'>$44.00</p>
        </Flex>
        <p className='text-base text-[#767676] font-dm font-normal'>Black</p>

    </div>
  )
}

export default CartCard 