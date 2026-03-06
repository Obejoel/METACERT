import React from 'react'
import IconThree from '../../assets/LandingPage/IconThree.svg'
import Iconfour from '../../assets/LandingPage/IconFour.svg'
import IconFive from '../../assets/LandingPage/IconFive.svg'
import IconSix from '../../assets/LandingPage/IconSix.svg'

function InstitutionalGrade() {
  return (
    <div>
        <div className='w-full'>
        <div className='bg-[rgba(0,33,71,1)] p-2 sm:pt-4 sm:pb-20 sm:px-10'>
            <h1 data-aos='fade-up' className='text-white font-semibold text-[32px] pt-10 text-center sm:text-left'>Institutional Grade Trust</h1>

            {/* The double grid section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2'>
             <div>
                <p data-aos='fade-up' className='text-[rgba(148,163,184,1)] text-[18px] text-center sm:text-left'>We combine decentralized blockchain security with institutional safeguards to ensure your data is always reachable, yet perfectly safe </p>
             </div>
             <div data-aos="zoom-in" className='flex gap-2'>
                <div className='flex flex-1 flex-col justify-center pl-4 bg-[rgba(255,255,255,0.05)] rounded-md'>
                    <h2 className='text-[rgba(210,180,140,1)] font-semibold '>99.9%</h2>
                    <p className='text-[12px] text-[rgba(100,116,139,1)]'>UPTIME</p>
                </div>
                <div className='flex flex-col flex-1 justify-center pl-4 bg-[rgba(255,255,255,0.05)]'>
                    <h2 className='text-[rgba(210,180,140,1)] font-semibold'>AES-256</h2>
                    <p className='text-[12px] text-[rgba(100,116,139,1)]'>ENCRYPTION</p>
                </div>
             </div>
            </div>

{/* The four grid section */}
            <div
            data-aos="fade-up"
            data-aos-durattion="1000"
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-20 gap-5'>
                <div className='bg-[rgba(255,255,255,0.05)] rounded-2xl p-10'>
                <div>
                    <img src={IconThree} alt="" />
                </div>
                <h3 className='mt-8 mb-4 text-[rgba(225,225,225,1)] text-[18px]'>Smart Contract Automation</h3>
                <p className='text-[rgba(148,163,184,1)] text-[14px]'>Self-executing protpcols that bypass intermediaries, ensuring your instructions are followed exactly as coded</p>
                </div>

                <div className='bg-[rgba(255,255,255,0.05)] rounded-2xl p-10'>
                <div>
                    <img src={Iconfour} alt="" />
                </div>
                <h3 className='mt-8 mb-4 text-[rgba(225,225,225,1)] text-[18px]'>Grace Confirmation</h3>
                <p className='text-[rgba(148,163,184,1)] text-[14px]'>Multi-channel verification alerts prevents accidental transfers during temporary absences or travel</p>
                </div>

                   <div className='bg-[rgba(255,255,255,0.05)] rounded-2xl p-10'>
                <div>
                    <img src={IconFive} alt="" />
                </div>
                <h3 className='mt-8 mb-4 text-[rgba(225,225,225,1)] text-[18px]'>Verified Certificates</h3>
                <p className='text-[rgba(148,163,184,1)] text-[14px]'>Blockchain-stamped records provides immutable proof of ownership and legal compliance for all vault contents</p>
                </div>

              <div className='bg-[rgba(255,255,255,0.05)] rounded-2xl p-10'>
                <div>
                    <img src={IconSix} alt="" />
                </div>
                <h3 className='mt-8 mb-4 text-[rgba(225,225,225,1)] text-[18px]'>Activity Tracking</h3>
                <p className='text-[rgba(148,163,184,1)] text-[14px]'>Full transparent audit trails for all access attempts, encrypted and visible only to the vault owner</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default InstitutionalGrade