import React from 'react'
import { Link } from 'react-router-dom'

import Image from '../components/Image'
import Navber from '../layouts/Navber'
import Sideber from '../layouts/Sideber'
import Footer from '../layouts/Footer'
import Container from '../components/Container'
import Flex from '../components/Flex'

import BannerImage from '../assets/banner.jpg'
import Warrenty1 from '../assets/warrenty1.png'
import Warrenty2 from '../assets/warrenty2.png'
import Warrenty3 from '../assets/warrenty3.png'
import PomotionOne from '../assets/Ad_1.jpg'
import PomotionTwo from '../assets/Ad_2.jpg'
import PomotionThree from '../assets/Ad_3.png'
import OfferImage from '../assets/offer.jpg'
import CommonHeading from '../components/CommonHeading'
import CartCard  from '../components/CartCard'



const Home = () => {
  return (
  <>
 
  <Link to='/#'><Image className='w-full' src={BannerImage}/>
  <section className='border-b border-[#F0F0F0]'>
  <Container>
    <Flex className='py-8 justify-between'>
      <Flex className='gap-x-8'>
        <Image src={Warrenty1}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Two years warranty</p>
      </Flex>
      <Flex className='gap-x-8'>
        <Image src={Warrenty2}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Free shipping</p>
      </Flex>
      <Flex className='gap-x-8'>
        <Image src={Warrenty3}/>
        <p className='text-base text-[#6D6D6D] font-dm font-normal'>Return policy in 30 days</p>
      </Flex>
     

    </Flex>
  </Container>
  </section>

  <Container>
    <Flex className='pt-[174px] pb-[128px]'>
    <div className='w-1/2'>
    <div className='w-[780px] h-[780px]'>
        <Image className='w-full' src={PomotionOne}/>
      </div>
    </div>
    <div className='w-1/2'>
      <Flex className='flex-col gap-y-10'>
      <div className='w-[784px] h-[370px]'>
        <Image className='w-full' src={PomotionTwo}/>
      </div>
      <div className='w-[784px] h-[370px]'>
        <Image className='w-full' src={PomotionThree}/>
      </div>
      </Flex>
    </div>

    </Flex>

  </Container>

  <section className='pb-20'>
  <Container>
  <CommonHeading className='pb-12' text="New Arrivals"/>
  </Container>

  <Container>
    <Flex className='flex-wrap gap-x-10'>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </Flex>
  </Container>

  </section>

  <section className='pb-20'>
  <Container>
    <Flex className='flex-wrap gap-x-10'>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </Flex>
  </Container>

  </section>

  <Container>
    <Image className='pb-20' src={OfferImage}/>
  </Container>

  <section className='pb-20'>
  <Container>
    <Flex className='flex-wrap gap-x-10'>
      <CartCard/>
      <CartCard/>
      <CartCard/>
      <CartCard/>
    </Flex>
  </Container>

  </section>




  </Link>
 
  </>
  )
}

export default Home