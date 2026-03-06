import React from 'react'
import Twitter from '../../assets/LandingPage/Twitter.svg'
import Linkedin from '../../assets/LandingPage/Linkedin.svg'
import Background from '../../assets/LandingPage/Background.svg'

function Footer() {
  return (
    <div>

        {/* The up side */}
        <div className='bg-[rgba(0,33,71,1)] min-h-50'>
            <div className='border-b border-[rgba(148,163,184,1)]'>
            <div className='grid grid-cols-1 sm:grid-cols-5 pt-20 px-4 pb-20'>
        <div className='col-span-2'>
   <h3 className='text-white font-bold'>LEGACY VAULT</h3>
   <p className='text-[rgba(148,163,184,1)] text-sm leading-6 pt-4'>Setting the global standard for digital asset inheritance <br /> and blockchain-verified credential management. <br /> Built for longevity and absolute security.</p>
        </div>
        <div>
            <h3 className='text-white font-bold'>SOLUTIONS</h3>
            <div className='space-y-3 mt-4'>
            <p className='text-[rgba(148,163,184,1)] text-sm'>Individual Vaults</p>
            <p className='text-[rgba(148,163,184,1)] text-sm'>Family Vault</p>
            <p className='text-[rgba(148,163,184,1)] text-sm'>Institutional Issuance API</p>
            <p className='text-[rgba(148,163,184,1)] text-sm'>API Documentation</p>
            </div>
        </div>
        <div>
          <h3 className='text-white font-bold'>COMPANY</h3>
          <div className='space-y-3 mt-4'>
          <p className='text-[rgba(148,163,184,1)] text-sm'>Security Audit</p>
          <p className='text-[rgba(148,163,184,1)] text-sm'>Legal Framework</p>
          <p className='text-[rgba(148,163,184,1)] text-sm' >Privacy Policy</p>
          <p className='text-[rgba(148,163,184,1)] text-sm'>Compliance</p>
          </div>
        </div>
        <div>
            <h3 className='text-white font-bold'>CONNECT</h3>
            <div className='flex gap-4 items-center mt-6'>
                <img src={Twitter} alt="" />
                <img src={Linkedin} alt="" />
            </div>
        </div>
            </div>
     </div>

     {/* The down side */}
<div>
    <div className='flex justify-between text-xs text-[rgba(148,163,184,1)] items-center py-10 px-4'>
   <div>
     @ 2026 Legacy Vault Ltd. All digital asset management is subject to local regulatory compliance
   </div>
   <div className='flex gap-4'>
     <div className='flex gap-2 items-center'>
        <img src={Background} alt="" />
        SOC2 Type || Certified  
     </div>
     <div className='flex gap-2 items-center'>
        <img src={Background} alt="" />
        GDPR Comliant
     </div>
   </div>
    </div>
</div>
        </div>
    </div>
  )
}

export default Footer