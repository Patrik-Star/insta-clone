import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline'

import { HomeIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto '>

                {/* left - layout='fill'*/}
                <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image src="https://links.papareact.com/ocw"  style={{objectFit: "contain"}} fill alt='Instagram logo'/> 
                </div>
                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image src="https://links.papareact.com/jjm"  style={{objectFit: "contain"}} fill alt='Instagram logo'/>
                </div>

                {/* middle - search input field*/}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-gray-300 rounded-md'
                            type="text" placeholder='Search' />
                    </div>
                </div>

                {/* right TODO: make navbar work for mobile*/}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className='navBtn' />
                    <MenuIcon className='h-10 md:hidden cursor-pointer' />

                    <div className="relative navBtn">
                        <PaperAirplaneIcon className='navBtn rotate-45' />
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                    </div>
                    <PlusCircleIcon className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />

                    <img className='h-10 rounded-full' src='https://patrikbolander.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProfilePic.4b682267.png&w=384&q=95' alt='profile pic'/>
                </div>



            </div>
        </div >
    )
}

export default Header