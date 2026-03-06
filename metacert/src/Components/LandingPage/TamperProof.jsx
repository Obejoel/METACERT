import React from 'react'
import IconSeven from '../../assets/LandingPage/IconSeven.svg'
import { FaChevronUp } from "react-icons/fa6";

function TamperProof() {
  return (
    <div>
        <div className='mt-20 w-full mx-auto py-2 sm:py-4 min-h-150 '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                {/* The image aspect */}
                <div className='w-full'>
               <div 
               data-aos="zoom-in"
               className='bg-[rgba(0,33,71,1)] w-100  h-108 rounded-2xl mx-auto'></div>
              </div>
               {/* Text aspect */}
               <div data-aos="fade-up" data-aos-duration="1000" className='relative overflow-hidden text-center md:text-left z-10'>
                <p className='text-[12px] text-[rgba(0,33,71,1)] tracking-tight'>ENTERPRISE SOLUTION</p>
                <h2 className='text-[32px] text-[rgba(10,15,29,1)] pt-5 pb-10'>Tamper-Proof Credential Issuance</h2>
                <p className='pb-10'>Enable you organization to issue immutable digital certificates and sensitive records directly to your client vaults. Perfect for issurance policies, legal deeds and high-value certifications.
                </p>
                <div className='space-y-5'>
                <div className='flex gap-2 items-center z-10'><img src={IconSeven} alt="" /><span className='text-[rgba(16,22,47,1)] text-[16px]'>One-click mass credential distribution</span>
                </div>
                 <div className='flex gap-2 items-center'><img src={IconSeven} alt="" /><span className='text-[rgba(16,22,47,1)] text-[16px]'>Instant verification of tird-party auditors</span>
                </div>
                 <div className='flex gap-2 items-center'><img src={IconSeven} alt="" /><span className='text-[rgba(16,22,47,1)] text-[16px]'>API integration for existing HR and CRM system</span>
                </div>
                </div>
                <button className='py-2 px-4 flex items-center bg-[rgba(16,22,47,1)] text-white rounded-md mt-15 mx-auto md:mx-1'>Book an Enterprise Demo</button>

 
 {/* The absolute div  */}
  <div>
   <div className="bg-[rgba(253,230,199,1)] w-200 h-175 mx-auto rounded-4xl absolute -z-10 transform  translate-x-1/2 -rotate-30 -right-90 -bottom-60 hidden lg:block">
   {/* Outer layer */}
  <div class="bg-[rgba(251,223,173,1)] p-6 w-187.5 h-152.75 mx-auto mt-6 rounded-4xl">
     {/* Middle layer  */}
    <div className="bg-[rgba(210,180,140,1)] p-6 w-175 h-127.75 mx-auto rounded-4xl">
       {/* Inner layer */}
     
    </div>
  </div>
</div>
</div>

               </div>
            </div>
        </div>

         {/* div for the border */}
            <div className='bg-gray-100 w-full min-h-20 border-b border-gray-300 -z-50'>
            </div>

        {/* Frequently asked questions */}
        <div>
            <div data-aos="fade-up" data-aos-duration="1000" className='w-full mx-auto p-2 sm:py-4 sm:px-10 bg-gray-100 min-h-100'>
                <div className='sm:w-[70%] mx-auto'>
    <h1 className='text-center pt-20 text-[30px] text-[rgba(10,15,29,1)] font-bold'>Frequently asked questions</h1>

    {/* The FAQ items */}
    <div className="max-w-200 h-auto mx-auto mb-20">
        {/* First item */}
        <div className="bg-white w-full py-2 px-4 rounded-md mt-10 group">
        <div className='flex justify-between items-center font-bold'>
          <span>How is my data stored if you dont have my keys?</span>
          <button className='cursor-pointer'><FaChevronUp className='transform group-hover:rotate-180'/></button>
          </div>
          <p className='mt-7 hidden group-hover:block duration-2000 leading-8'>We utilize a hybrid "Privacy-First" architecture. Your actual files (PDFs, credentials, and messages) are encrypted locally and stored on IPFS (a decentralized storage network). Only the Merkle Root—a cryptographic fingerprint of your data is stored on the Starknet blockchain. This ensures that the protocol can verify the authenticity of your legacy while remaining entirely "zero-knowledge,"meaning we never see or hold your private information.</p>
        </div>
        {/* Second item */}
        <div className="bg-white w-full py-2 px-4 rounded-md mt-10 group">
        <div className='flex justify-between items-center font-bold'>
          <span>What happens if the "Grace Period" is triggered by mistake?</span>
          <button className='cursor-pointer'><FaChevronUp className='transform group-hover:rotate-180'/></button>
          </div>
          <p className='mt-7 hidden group-hover:block duration-2000 leading-8'>The "Grace Period" is the countdown that begins after your last recorded "Heartbeat" (activity). If this is triggered by mistake for example, if you are simply away from your devices you can stop the process at any time by performing a "Ping" or "Heartbeat" transaction. This immediately resets the timer to zero and prevents any successors from claiming the vault.</p>
        </div>
         {/* Third item */}
        <div className="bg-white w-full py-2 px-4 rounded-md mt-10 group">
        <div className='flex justify-between items-center font-bold'>
          <span>Is this legally binding in my jurisdiction?</span>
          <button className='cursor-pointer'><FaChevronUp className='transform group-hover:rotate-180'/></button>
          </div>
          <p className='mt-7 hidden group-hover:block duration-2000 leading-8'>MetaCert operates on the principle of "Code is Law" within the digital ecosystem, ensuring the cryptographic transfer of assets. However, legal recognition of smart contract inheritance varies by jurisdiction. We recommend using this protocol as a technical layer that complements your traditional legal will or estate plan.</p>
        </div>
        {/* Fourth item */}
        <div className="bg-white w-full py-2 px-4 rounded-md mt-10 group">
        <div className='flex justify-between items-center font-bold'>
          <span>What Blockchain does the vault use?</span>
          <button className='cursor-pointer'><FaChevronUp className='transform group-hover:rotate-180'/></button>
          </div>
          <p className='mt-7 hidden group-hover:block duration-2000 leading-8'>The metacert vault is built on Starknet, a high-performance Validity Rollup (Layer 2) on Ethereum. We chose Starknet for its advanced account abstraction features (which allow for complex inheritance logic) and its low transaction costs, ensuring that maintaining your legacy remains affordable.</p>
        </div>
    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default TamperProof