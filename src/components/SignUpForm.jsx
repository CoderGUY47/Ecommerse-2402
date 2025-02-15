import React from 'react'

const SignUpForm = ({formTitle, formText, className}) => {
  return (
    <div className="w-5/12 pb-20">
        <h5 className={`text-primary font-dm font-bold ${className}`}>{formTitle}</h5>
        <p className={`text-[14px] text-[#767676] font-normal font-dm pb-5 mt-[5px] 
        mb-[30px] border-b-[2px] border-[#F0F0F0]${className}`}>{formText}</p>
    </div>
  )
}

export default SignUpForm