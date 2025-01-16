'use client'

import React from 'react'
import Announce from './announce'
import Link from 'next/link'
import Logo from './logo'
import NavIcons from './nav-icons'
import NavDropdown from './nav-dropdown'
function Header() {

    return (
        <div className='sticky top-0 z-50'>
            <Announce />
            <div className='w-full h-16 bg-black border-b-2 border-bg-tertiary flex items-center justify-between pr-4 sticky z-10'>
                <Logo />
                <div className='h-full  items-end -mb-[3px] hidden min-[768px]:flex'>
                    <NavDropdown />
                    <Link
                        href='/fonzai'
                        className='rounded-tr-md -ml-[3px] cursor-pointer border-2 hover:bg-bg-secondary border-bg-tertiary px-4 py-1 transition-all w-[250px]'>
                        FONZAI AI design playground
                    </Link>
                </div>
                <NavIcons />
            </div>
            <div className='h-full items-center mb-4 -mt-[3px] flex   justify-center min-[768px]:hidden'>
                <NavDropdown />
                <Link
                    href='/fonzai'
                    className='bg-black cursor-pointer border-2 hover:bg-bg-secondary text-center border-bg-tertiary px-4 py-2 h-16 flex items-center justify-center min-[768px]:h-auto transition-all w-full min-[768px]:w-[250px]'>
                    FONZAI AI design playground
                </Link>
            </div>
        </div>
    )
}

export default Header
