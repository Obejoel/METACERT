import React from 'react'

const NavItems = [

    {
        id: 1,
        name: "How it Works",
        link: "#",
    },
    {
        id: 2,
        name: "Security",
        link: "#",
    },
    {
        id: 3,
        name: "Organizations",
        link: "#",
    },
    {
        id: 4,
        name: "FAQ",
        link: "#",
    },
]
   

function Navbar() {
  return (

// Number 1 component in the Landing page
    <div className='relative'>
        <div className='w-full p-2 sm:px-10 sm:py-4 bg-white fixed top-0 left-0 border border-gray-200 z-9'>
    <div className=''>
            {/* The absolute navbar */}
            <div className='block sm:hidden absolute bg-white rounded-2xl p-2 w-40 transform top-10 left-1/2  -translate-x-1/2 text-center'>
                <ul className='space-y-1'>
               {
                NavItems.map((NavItem) => {
                    return <li><a key={NavItem.id} href={NavItem.link} className='text-[rgba(0,33,71,1)] hover:bg-[rgba(16,22,47,1)] hover:text-white py-0.5 px-1 inline-block w-full rounded-2xl font-semibold'>{NavItem.name}</a></li>
                })
               }
               </ul>
            </div>

{/* The whole navbar */}
            <div className='flex justify-between items-center'>
                {/* The name */}
            <div className='font-bold text-[rgba(0,33,71,1)]'>LEGACY VAULT
            </div>
            {/* Nav items */}
            <div className='hidden sm:block'>
                <ul className='sm:flex gap-10'>
               {
                NavItems.map((NavItem) => {
                    return <li><a key={NavItem.id} href={NavItem.link} className='text-[rgba(0,33,71,1)] hover:bg-[rgba(16,22,47,1)] hover:text-white rounded-4xl py-0.5 px-1 font-semibold'>{NavItem.name}</a></li>
                })
               }
               </ul>
            </div>
            {/* Nav Buttons */}
            <div className='flex gap-4'>
              <button className='cursor-pointer text-[rgba(0,33,71,1)] hover:bg-[rgba(16,22,47,1)] hover:text-white rounded-md py-1 px-3 font-semibold'>Log in</button>
              <button className='py-1 px-3 text-[rgba(0,33,71,1)] hover:bg-[rgba(16,22,47,1)] hover:text-white rounded-md cursor-pointer font-semibold'>Open Vault</button>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar