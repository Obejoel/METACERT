import React from 'react'
import Section from './Section'
import Delete from '../../assets/LandingPage/Delete.svg'
import Contact from '../../assets/LandingPage/Contact.svg'
import Message from '../../assets/LandingPage/Message.svg'

function Container() {
  return (
  // Number 2 component in the Landing page

    <div className='relative overflow-x-hidden overflow-y-visible'>
{/* Section aspect */}
<Section/>
   
  {/* The absolute div  */}
  <div>
   <div className="bg-[rgba(253,230,199,1)] w-200 h-175 mx-auto rounded-4xl absolute transform  translate-x-1/2 -rotate-30 -right-90 bottom-90 hidden md:block z-10">
   {/* Outer layer */}
  <div class="bg-[rgba(251,223,173,1)] p-6 w-187.5 h-152.75 mx-auto mt-6 rounded-4xl">
     {/* Middle layer  */}
    <div className="bg-[rgba(210,180,140,1)] p-6 w-175 h-127.75 mx-auto rounded-4xl">
       {/* Inner layer */}
     
    </div>
  </div>
</div>
</div>


{/* Container aspect */}
        <div className='w-full mx-auto p-2 sm:py-4 sm:px-10 bg-gray-100 min-h-230'>
            <div className='text-center pt-4 sm:pt-10'>
                <h1 className='text-[36px] font-bold'>How Your Legacy is Preserved</h1>
                <p className='z-999'>Our automated protocol ensures your assets are protected and transferred exactly
                <br />according to your wishes.</p>
            </div>
        {/* First grid section */}
      <div className='mt-30'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
           <div
           data-aos="fade-right"
           className=' space-y-10'>
            <h1 className="text-right font-bold text-2xl mb-5">1. Store Assets</h1>
            <p className='indent-20'>Uplpoad encrypted documents, store private keys, or link NFT collections to your secure vault. Everything id encrypted at the source</p>
           </div>
           <div
           data-aos="zoom-in"
           className='relative'><input type="text"className='w-full h-30 bg-white rounded-lg relative -z-10'/> <img src={Delete} alt="" className='absolute transform -translate-y-25 left-5'/>
           </div>
        </div>
      </div>  
    {/* second grid section  */}
<div className='mt-20'>
        <div 
        data-aos="zoom-in"
        className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
          {/* Image aspect */}
           <div className='relative order-2 sm:order-1'><input type="text"className='w-full h-30 bg-white rounded-lg relative'/> <img src={Contact} alt="" className='absolute transform -translate-y-25 left-5'/>
           </div>
           {/* Text aspect */}
           <div
           data-aos="fade-up"
           className=' space-y-10 order-1 sm:order-2'>
            <h1 className="font-bold text-2xl mb-5">2. Set Beneficiary and Period</h1>
            <p className=''>Designate your heirs and define an 'Inactivity period' (e.g., 6 months). Smart Contract monitors your wallet activity for signs of life.</p>
           </div>
        </div>
      </div>  
     {/* Third grid section */}
      <div className='mt-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
           <div 
           data-aos="fade-up"
           className=' space-y-10 text-right'>
            <h1 className="font-bold text-2xl mb-5">3. Grace Period and Transfer</h1>
            <p>If inactivity is detected, a 30-day grace period begins with multiple alerts. If no response, assets are automatically and securely transferred</p>
           </div>
           <div
           data-aos="zoom-in"
           className='relative'><input type="text"className='w-full h-30 bg-white rounded-lg relative'/> <img src={Message} alt="" className='absolute transform -translate-y-25 left-5'/></div>
        </div>
      </div>  

        </div>
    </div>
  )
}

export default Container