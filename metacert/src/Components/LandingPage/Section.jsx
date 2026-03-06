import React from 'react'
import iconImg from "../../assets/LandingPage/Icon.png"
import SecureImg from "../../assets/LandingPage/Secure.svg"

function SectionContainer() {
  return (
// Number 2 component in the Landing page

    <div>
        <div className='p-2 sm:py-4 sm:px-10 w-full bg-white mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* text aspect */}
     <div className='pt-45 sm:pt-30 text-center sm:text-left'>
        <div className='flex items-center gap-2 bg-[rgba(255,248,239,100)] rounded-full px-2 w-fit'>
           <img src={iconImg} alt="" />
           <p className='text-[rgba(210,180,140,1)]'>BLOCKCHAIN-SECURED</p>
        </div>
        <div className='leading-tight'>
        <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className='text-[40px] md:text-[72px] font-serif font-bold text-[rgba(0,33,71,1)]'>Protect Your</h1>
        <span
        data-aos="fade-up"
        data-aos-duration="2000"
        className='text-[40px] md:text-[72px] font-bold font-serif text-[rgba(210,180,140,1)]'>Digital Legacy</span>
        </div>
        <p 
        data-aos="fade-up"
        data-aos-duration="2000"
        className='text-[rgba(51,65,85,1)] text-[20px] leading-[]32.5px'>A secure, automated way to pass on your crypto assets, dogotal identities and vitsl documents to loved ones. Human-centered inheritance powered by smart contracts</p>
        <div
        data-aos="fade-out"
        className='flex gap-3 w-full h-fit pt-5'>
            <button className='flex flex-1 justify-center items-center cursor-pointer hover:bg-[rgba(16,22,47,1)] hover:text-white rounded-md py-1 px-3 border border-[rgba(51,65,85,1)] text-[16px]'>I’m an Individual</button>
            <button className='flex flex-1 justify-center items-center cursor-pointer hover:bg-[rgba(16,22,47,1)] hover:text-white rounded-md py-1 px-3 border border-[rgba(51,65,85,1)] text-[16px]'>I’m an Organization</button>
        </div>
     </div>
     {/* container */}
     <div>
        <div
        data-aos="zoom-out"
        data-aos-delay="500"
        data-aos-easing="linear"
        className='w-full mt-6 md:mt-25'>
            <img src={SecureImg} alt="" className='w-300 h-110 object-cover rounded-3xl drop-shadow-(20px_20px_20px_rgb(51,65,85)) mx-auto'/>
        </div>
     </div>
            </div>
        </div>
    </div>
  )
}

export default SectionContainer