import React from 'react'
import FloatMenu from '@/app/common/float-menu'
import ProductTypes from './product-types'
import { cn } from '@/utils/cn'

function NavDropdown() {
    return (
        <FloatMenu
            target={
                <div
                    className={cn(
                        'bg-black sm:rounded-tl-md cursor-pointer border-2 hover:bg-bg-secondary border-bg-tertiary py-2 sm:py-1 transition-all ml-12 min-[768px]:ml-0 w-[40vw] h-16 min-[768px]:h-auto flex items-center justify-center min-[768px]:w-[250px]'
                    )}>
                    <h2 className=' text-accent font-semibold lg:text-base text-center'>Our Products</h2>
                </div>
            }>
            <ProductTypes />
        </FloatMenu>
    )
}

export default NavDropdown
