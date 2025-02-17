import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import Flex from '../components/Flex'
import { FaGreaterThan } from "react-icons/fa6";
import Button from '../components/Button'

const Checkout = () => {
  return (
    <div>
        <section className='pt-[124px] pl-[157px] pb-[170px]'>
          <Container>
            <CommonHeading text='Checkout' className='font-dm font-[700] text-[49px]'/>
            <div className='justify-center items-center mb-4'>
              <Flex className="items-center gap-x-1 text-base text-[#767676] font-dm font-normal">
              <Link to="/" className="font-dm font-normal hover:text-primary duration-500">Home</Link> 
              <FaGreaterThan className='text-[#767676] font-normal text-[8px]'/>
              <span>Checkout</span>
              </Flex>
            </div>
            <p className='w-[570px] text-base text-[#767676] font-normal font-dm pt-28'>
              Have a coupon?
              <span className='hover:text-primary duration-75 cursor-pointer px-2'>Click here to enter your code</span>
            </p>










            <div className='pt-[119px]'>
              <CommonHeading text='Billing Details' className='font-[700] text-[39px] font-dm text-primary'/>
              <form action="" className='pt-[42px]'>
                <div className='w-[1057px]'>
               <Flex className="justify-between">
                <div>
                <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>First Name *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="First Name" className='w-[508px] outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                </div>

                <div>
                <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Last Name *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Last Name" className='w-[508px] outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                </div>
               </Flex>
                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Companye Name (optional)</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Company Name" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Country *</label>
                <br />
                <select name="" id="" className='w-full font-dm font-[400] text-[14px] text-[#767676] py-4 bg-transparent border-b-2 cursor-pointer'>
                <option value="">Please select</option>
                  <option value="">Bangladesh</option>
                  <option value="">United States</option>
                  <option value="">Canada</option>
                  <option value="">United Kingdom</option>
                  <option value="">Australia</option>
                  <option value="">India</option>
                  <option value="">Brazil</option>
                  <option value="">Japan</option>
                  <option value="">Germany</option>
                </select>
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Street Address *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="House number and street name" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                <br />
                <input type="text" id="name" name="name" placeholder="Apartment, suite, unit etc. (optional)" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Town/City *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Town/City" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>County (optional)</label>
                <br />
                <input type="text" id="name" name="name" placeholder="County" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Post Code *</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Post Code" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                 <div className='pt-6'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Email Address *</label>
                <br />
                <input type="email" id="name" name="name" placeholder="Email" className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>

                
                 <div className='pt-[129px]'>
                <CommonHeading className='text-[39px] font-dm font-[700] text-primary' text='Additional Information'/>
                <div className='pt-6 w-[1054px]'>
                 <label htmlFor="name" className='font-dm text-4 font-[700] text-primary'>Other Notes (optional)</label>
                <br />
                <input type="email" id="name" name="name" placeholder="Notes about your order, e.g. special notes for delivery." className='w-full outline-none border-b-2 py-4 font-dm text-[14px] text-[#767676]' />
                 </div>
              </div>
                </div>
              </form>
         
         <div className='pt-[129px] pb-[60px]'>
          <CommonHeading text='Your Order' className='text-[39px] font-dm font-[700] text-primary pb-[48px]'/>

          <table className="w-[644px] border-collapse border-[1px] border-[#F0F0F0] bg-transparent ">
        <thead>
          <tr className="bg-transparent">
            <th className="border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] pr-[237px] text-4 font-dm font-[700] text-primary">Product</th>
            <th className="border border-[#F0F0F0] pt-[13px] pb-[11px] pl-[21px] pr-[267px] font-dm text-4 font-[400] text-secondary">Total</th>
            
          </tr>
        </thead>
        <tbody>
         
            <tr className="bg-transparent">
              <td className="border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] pr-[165px] text-4 font-dm font-[700] text-primary">Product name x 1</td>
              <td className="border border-[#F0F0F0] pt-[13px] pb-[11px] pl-[21px] pr-[237px] font-dm text-4 font-[400] text-secondary">389.99 $</td>
              
            </tr>

            <tr className="bg-transparent">
              <td className="border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] pr-[165px] text-4 font-dm font-[700] text-primary">Subtotal</td>
              <td className="border border-[#F0F0F0] pt-[13px] pb-[11px] pl-[21px] pr-[237px] font-dm text-4 font-[400] text-secondary">389.99 $</td>
              
            </tr>

            <tr className="bg-transparent">
              <td className="border border-[#F0F0F0] pt-[17px] pb-[14px] pl-[20px] pr-[165px] text-4 font-dm font-[700] text-primary">Total</td>
              <td className="border border-[#F0F0F0] pt-[13px] pb-[11px] pl-[21px] pr-[237px] font-dm text-4 font-[400] text-secondary">389.99 $</td>
              
            </tr>
        
        </tbody>
      </table>
         </div>

         <div className='w-[1053px] border-[1px] border-[#F0F0F0]'>
             <div className='pt-[24px] pl-[34px]'>
              <Flex className='gap-x-[8px] pb-[24px] items-center'>
                <input type="radio" />
                <label htmlFor="" className='text-[16px] font-dm font-[700] text-primary'>Bank</label>
              </Flex>

              <p className='w-[985px] bg-[#F7F8F9] text-[14px] font-dm font-[400] text-secondary pt-[29px] pb-[17px] pl-[26px] pr-[438px]'>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p>
             </div>

             <div className='pt-[24px] pl-[34px]'>
              <Flex className='gap-x-[8px] pb-[24px] items-center'>
                <input type="radio" />
                <label htmlFor="" className='text-[16px] font-dm font-[700] text-secondary'>Bank 2</label>
              </Flex>

              <p className='w-[873px] text-[14px] font-dm font-[400] text-secondary leading-[30px] '>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className='text-primary cursor-pointer hover:text-secondary duration-100'>privacy policy</span>.</p>
             </div>

             <div className='pt-[24px] pl-[34px] pb-[30px]'>
             <Button text='Proceed to Bank' className='w-[200px] text-[14px] font-dm font-[700] pl-0 pr-0'/>
             </div>

             
         </div>
             
            </div>

            
          </Container>
        </section>

    </div>
  )
}

export default Checkout