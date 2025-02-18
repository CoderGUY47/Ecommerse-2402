import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CommonHeading from '../components/CommonHeading';
import Flex from '../components/Flex';
import Button from '../components/Button';
import { FaGreaterThan } from "react-icons/fa6";
import SignUpForm from '../components/SignUpForm';
import { FaCaretDown } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Signup = () => {
  return (
    <section>
      <Container>
      <CommonHeading className='pt-5' text='Sign up'/>
        <ArrowPages prevPage='Home' nextPage='Signup'/>
        <p className='w-[570px] text-base text-[#767676] font-normal font-dm py-10'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the.
        </p>
        <div className='border-b-[2px] border-[#F0F0F0]'></div>
        <h3 className='text-[30px] text-primary font-dm font-bold py-10'>Your Personal Details</h3>
        <Flex className='gap-x-8'>
          <SignUpForm formTitle='First Name' formText='First Name'/>
          <SignUpForm formTitle='Last Name' formText='Last Name'/>
        </Flex>
        <Flex className='gap-x-8'>
          <SignUpForm formTitle='Email address' formText='company@domain.com'/>
          <SignUpForm formTitle='Telephone' formText='Your phone number'/>
        </Flex>

        <div className='border-b-[2px] border-[#F0F0F0]'></div>
        <h3 className='text-[30px] text-primary font-dm font-bold py-10'>New Customers</h3>
        <Flex className='gap-x-8'>
          <SignUpForm formTitle='Address 1' formText='4279 Zboncak Port Suite 6212'/>
          <SignUpForm formTitle='Address 2' formText='_'/>
        </Flex>
        <Flex className='gap-x-8'>
          <SignUpForm formTitle='City' formText='Your city'/>
          <SignUpForm formTitle='Post Code' formText='05287'/>
        </Flex>

        <Flex className='gap-x-8'>
          <SignUpForm formTitle='Country' formText='Please select'/>
          <FaCaretDown className='-ml-[45px] mt-[30px]'/>
          <SignUpForm formTitle='Region/State' formText='Please select'/>
          <FaCaretDown className='-ml-[45px] mt-[30px]'/>
        </Flex>
        <div className='border-b-[2px] border-[#F0F0F0]'></div>

        <h3 className='text-[30px] text-primary font-dm font-bold py-10'>Your password</h3>
        <Flex className='gap-x-8'>
          <SignUpForm formTitle='Passowrd' formText='Password'/>
          <SignUpForm formTitle='Repeat Password' formText='Repeat Password'/>
        </Flex>
        <div className='border-b-[2px] border-[#F0F0F0]'></div>

        <Flex className='gap-x-3 pt-14 pb-6'>
          <MdCheckBoxOutlineBlank 
          className='w-[17px] h-[17px] text-[25px] text-[#767676] hover:bg-[#767676] hover:text-white rounded transition-all duration-500'/>
          <p className='text-sm text-[#767676] font-dm font-normal'>I agree to the terms and conditions</p>
        </Flex>

        <Flex className='gap-x-8 pb-7'>
          <p className='text-sm text-[#767676] font-dm font-normal'>Subscribe Newsletter</p>
          <Flex className='gap-x-2'>
            <MdCheckBoxOutlineBlank
            className='w-[17px] h-[17px] text-[25px] text-[#767676] 
            hover:bg-[#767676] hover:text-white rounded transition-all duration-500'/>
            <p className='text-sm text-[#767676] font-dm font-normal'>Yes</p>
          </Flex>
          <Flex className='gap-x-2'>
            <MdCheckBoxOutlineBlank
            className='w-[17px] h-[17px] text-[25px] text-[#767676] 
            hover:bg-[#767676] hover:text-white rounded transition-all duration-500'/>
            <p className='text-sm text-[#767676] font-dm font-normal'>No</p>
          </Flex>
        </Flex>
        <div className='pb-[140px]'>
         <Button text='Login'/>
        </div>
      </Container>
    </section>
  )
}

export default Signup