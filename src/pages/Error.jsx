import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import error from '../assets/error.png'
import { IoSearchOutline } from "react-icons/io5";
import Button from '../components/Button';

const Error = () => {
  return (
    <div>
        <section className='pt-[81px] pb-[140px]'>
          <Container>
            <div className='ml-[157px]'>
            <Image src={error}/>
             <p className='text-secondary font-dm font-[400] text-[16px] leading-[30px] w-[644px] pt-[49px] pb-[50px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
             <div className='w-[643px] relative pb-[60px]'>
              <input className='w-full p-[21px] font-dm font-[400] text-[16px] leading-[30px] bg-[#F0F0F0] border-none outline-none' type="text" placeholder='Type to search'/>
              <IoSearchOutline className='absolute top-[27px] right-[22px] w-[16px] text-primary cursor-pointer' />
             </div>
             <Button text='Back to Home' className='w-[220px] text-[14px] font-dm font-[700] py-[16px] px-[50px]'/>
            </div>
          </Container>
        </section>
    </div>
  )
}

export default Error