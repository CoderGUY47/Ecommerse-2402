import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Flex from './Flex';
import { Link } from 'react-router-dom';

const ArrowPages = ({prevPage,nextPage}) => {
  return (
    <div className='justify-center items-center mb-4'>
    <Flex className="items-center gap-x-1 text-base text-[#767676] font-dm font-normal">
      <Link to="/" className="font-dm font-normal hover:text-primary duration-500">{prevPage}</Link> 
      <IoIosArrowForward className='text-[#767676] font-normal text-[12px]'/>
      <span>{nextPage}</span>
    </Flex>
  </div>
  )
}

export default ArrowPages