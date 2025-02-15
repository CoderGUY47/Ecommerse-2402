import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import CommonHeading from '../components/CommonHeading'
import ProductOne from '../assets/product1.png'
import { IoIosStar } from 'react-icons/io'
import Button from '../components/Button'
import { FaPlus } from 'react-icons/fa'

const ProductDeteils = () => {
  let [conditon1,setCondition1]=useState(false)
  let [conditon2,setCondition2]=useState(false)
  let [conditon3,setCondition3]=useState(false)
  let [conditon4,setCondition4]=useState(false)
  let [conditon5,setCondition5]=useState(false)
  let handleStar1=()=>{
    setCondition1(!conditon1)
  }
  let handleStar2=()=>{
    setCondition2(!conditon2)
  }
  let handleStar3=()=>{
    setCondition3(!conditon3)
  }
  let handleStar4=()=>{
    setCondition4(!conditon4)
  }
 
  let handleStar5=()=>{
    setCondition5(!conditon5)
  }
 
  
  return (
   <section className='pt-[150px] pb-12'>
    <Container>
    <Flex className='flex-wrap gap-10 '>
      <Image src={ProductOne}/>
      <Image src={ProductOne}/>
      <Image src={ProductOne}/>
      <Image src={ProductOne}/>
    </Flex>

    <CommonHeading className='pt-12 pb-4' text='Product'/>
    <Flex className='gap-x-6 items-center pb-4'>
    <Flex className='gap-x-2'>
    <IoIosStar onClick={handleStar1} className={conditon1?"text-[#FFD881]":"text-black"}/>
    <IoIosStar onClick={handleStar2} className={conditon2?"text-[#FFD881]":"text-black"}/>
    <IoIosStar onClick={handleStar3} className={conditon3?"text-[#FFD881]":"text-black"}/>
    <IoIosStar onClick={handleStar4} className={conditon4?"text-[#FFD881]":"text-black"}/>
    <IoIosStar onClick={handleStar5} className={conditon5?"text-[#FFD881]":"text-black"}/>
      
    </Flex>
    <p className='text-sm text-[#767676] font-pop font-normal'>1 Review</p>
    </Flex>

    <div className=' w-1/2 py-6 border-b border-[#D8D8D8]'>
    <Flex className='gap-x-6 items-center'>
    <span className='text-base text-[#767676] font-dm font-normal'>$88.00</span>
    <span className='text-2xl text-[#262626] font-dm font-bold'>$44.00</span>
    </Flex>
    </div>
    
    <div className=' w-1/2 py-6 border-b border-[#D8D8D8]'>
    <Flex className='gap-x-14 items-center py-7'>
      <h4 className='text-base text-[#262626] font-dm font-bold'>COLOR:</h4>
      <Flex className='items-center gap-x-4'>
        <div className='w-[20px] h-[20px] bg-red-500 rounded-full'></div>
        <div className='w-[20px] h-[20px] bg-blue-500 rounded-full'></div>
        <div className='w-[20px] h-[20px] bg-purple-500 rounded-full'></div>
        <div className='w-[20px] h-[20px] bg-green-500 rounded-full'></div>
        <div className='w-[20px] h-[20px] bg-black rounded-full'></div>
      </Flex>
    </Flex>
    <Flex className='gap-x-14 items-center py-7'>
      <h4 className='text-base text-[#262626] font-dm font-bold'>SIZE:</h4>
      <Flex className='items-center gap-x-4'>
       <select  className='px-10 py-2'>
        <option value="">S</option>
        <option value="">L</option>
        <option value="">M</option>
       </select>
      </Flex>
    </Flex>
    <Flex className='gap-x-14 items-center py-7'>
      <h4 className='text-base text-[#262626] font-dm font-bold'>QUANTITY:</h4>
      <Flex className='items-center gap-x-4'>
        <Flex className='w-[139px] h-[36px] border border-[#F0F0F0] justify-evenly items-center'>
          <div>+</div>
          <div>1</div>
          <div>-</div>

        </Flex>
      </Flex>
    </Flex>
    </div>

    <div className=' w-1/2 py-6 border-b border-[#D8D8D8]'>
    <Flex className='gap-x-14 items-center py-4'>
      <h4 className='text-base text-[#262626] font-dm font-bold'>STATUS::</h4>
      <h6 className='text-sm text-[#262626] font-dm font-bold'>In stock</h6>
      
    </Flex>
   
    </div>
    

    <div className=' w-1/2 py-6 border-b border-[#D8D8D8]'>
    <Flex className='gap-x-5 items-center py-4'>
     <Button text='Add to Wish List'/>
     <Button text='Add to Cart'/>
      
    </Flex>
   
    </div>

    <div className=' w-1/2 py-6 border-b border-[#D8D8D8]'>
    <Flex className='justify-between items-center py-4'>
     <h5 className='text-base text-black font-dm font-bold'>FEATURES & DETAILS</h5>
     <FaPlus />
      
    </Flex>
   
    </div>
    <div className=' w-1/2 py-6 border-b border-[#D8D8D8]'>
    <Flex className='justify-between items-center py-4'>
     <h5 className='text-base text-black font-dm font-bold'>SHIPPING & RETURNS</h5>
     <FaPlus />
      
    </Flex>
   
    </div>
    <div className=' w-1/2 pt-6 pb-[123px]  '>
    <p className='text-[#767676] text-base font-normal font-dm'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    </p>
   
    </div>






    <div className=' w-full py-6 border-b border-[#D8D8D8]'>
      <Flex className='gap-x-14'>
        <p className='text-xl text-[#767676] font-dm font-normal'>Description</p>
        <p className='text-xl text-[#262626] font-dm font-bold'>Reviews (1)</p>

      </Flex>
        <p className='text-base text-[#767676] font-dm font-normal pt-10'>1 review for Product</p>
   
   
    </div>
    <div className=' w-full py-6 border-b border-[#D8D8D8]'>
     <Flex className='items-center   justify-between'>
     <Flex className='gap-x-10 items-center'>
     <h6>John Ford</h6>
      <Flex className='gap-x-2'>
          <IoIosStar onClick={handleStar1} className={conditon1?"text-[#FFD881]":"text-black"}/>
          <IoIosStar onClick={handleStar2} className={conditon2?"text-[#FFD881]":"text-black"}/>
          <IoIosStar onClick={handleStar3} className={conditon3?"text-[#FFD881]":"text-black"}/>
          <IoIosStar onClick={handleStar4} className={conditon4?"text-[#FFD881]":"text-black"}/>
          <IoIosStar onClick={handleStar5} className={conditon5?"text-[#FFD881]":"text-black"}/>
    </Flex>
     </Flex>
    <p>6 months ago</p>
     </Flex>

     <p className='text-[#767676] text-base font-bold pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
     </p>
   
    </div>


    <div className=' w-1/2 py-12 '>
      <h4 className='text-base text-[#262626] font-dm font-bold'>Add a Review</h4>
    </div>
    <div className=' w-1/2 py-4 '>
      <label htmlFor="">Name: 
        <input className='block w-full py-4 border-b border-[#D8D8D8]' type="text"  placeholder='Your name here'/>
      </label>
    </div>
    <div className=' w-1/2 py-4 '>
      <label htmlFor="">Email: 
        <input className='block w-full py-4 border-b border-[#D8D8D8]' type="text"  placeholder='Your name Email'/>
      </label>
    </div>
    <div className=' w-1/2 py-4 pb-[87px] '>
      <label htmlFor="">Review: 
        <input className='block w-full py-4 border-b border-[#D8D8D8]' type="text"  placeholder='Your review here'/>
      </label>
    </div>

    <Button text='Post'/>


    
    

   </Container>
   </section>
  )
}

export default ProductDeteils