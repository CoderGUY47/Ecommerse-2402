import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CommonHeading from '../components/CommonHeading';
import { FaGreaterThan } from "react-icons/fa6";
import Flex from '../components/Flex';
import Button from '../components/Button';
import Circle from '../components/Circle';




const Login = () => {
  return (
    <section className='pb-[70px]'>
      <Container>
        <CommonHeading className='pt-5' text='Login'/>
        <div className='justify-center items-center mb-4'>
          <Flex className="items-center gap-x-1 text-base text-[#767676] font-dm font-normal">
            <Link to="/" className="font-dm font-normal hover:text-primary duration-500">Home</Link> 
            <FaGreaterThan className='text-[#767676] font-normal text-[8px]'/>
            <span>Login</span>
          </Flex>
        </div>
        <p className='w-[570px] text-base text-[#767676] font-normal font-dm py-10'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the.
        </p>
        <div className='border-b-[2px] border-[#F0F0F0]'></div>
        <h3 className='text-[30px] text-primary font-dm font-bold py-10'>Returning Customer</h3>
        <Flex className='gap-x-8'>
          <div className="w-5/12 pb-20">
            <h5 className='text-primary font-dm font-bold'>Email address</h5>
            <p className='text-[14px] text-[#767676] font-normal font-dm pb-5 mt-[5px] mb-[30px] border-b-[2px] border-[#F0F0F0]'>company@domain.com</p>
            <Button className='!bg-transparent !border-primary !text-primary hover:!bg-primary 
            hover:!text-white hover:!border-transparent' text='Login'/>
          </div>

          <div className="w-5/12">
            <h5 className='text-primary font-dm font-bold'>Password</h5>
            <p className='pb-7 mt-[5px] mb-[30px] border-b-[2px] border-[#F0F0F0]'>
            <Flex className='gap-1 mt-3'>
              <Circle/><Circle/><Circle/>
              <Circle/><Circle/><Circle/>
              <Circle/><Circle/><Circle/>
            </Flex>
            </p>
          </div>
        </Flex>
        <div className='border-b-[2px] border-[#F0F0F0]'></div>

        <div>
         <h3 className='text-[30px] text-primary font-dm font-bold pt-10'>New Customer</h3>
         <p className='w-[570px] text-sm text-[#767676] font-normal font-dm pt-10 pb-[60px]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the.
        </p>
        <Button text='Continue'/>
        </div>

      </Container>
    </section>
  );
};

export default Login;