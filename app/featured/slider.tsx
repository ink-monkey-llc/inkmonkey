'use client'
import React, { useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Chevron, { Direction } from '../icons/chevron'
import { ChevronLeftLong, ChevronRightLong } from '../icons/chevron-long'
import SliderContent from './slider-content'
import { FeaturedCollection } from '@/lib/shopify/types'
import { cn } from '../../utils/cn'
import Link from 'next/link'

type SliderProps = {
    collections: {
        first: FeaturedCollection
        // second: FeaturedCollection
    }[]
    type: string
}

function Slider({ collections, type }: SliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null)
    const nextRef = useRef<HTMLDivElement>(null)
    const { width } = useWindowSize()
    const isXs = width < 640
    const scrollAmount = width * 0.6
    const [active, setActive] = useState(0)

    const handleClick = (seq: string, dir: string) => {
        if (seq === 'top') {
            if (dir === 'left') {
                sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
            }
            if (dir === 'right') {
                sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            }
        } else if (seq === 'btm') {
            if (dir === 'left') {
                nextRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
            }
            if (dir === 'right') {
                nextRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            }
        }
    }

    const firstArr = collections.map((col) => col.first)
    //  const secondArr = collections.map((col) => col.second)
    const titles = firstArr.map((collection) => collection.collectionInfo?.title)

    const linkPath = ` list/${type === 'decals' ? 'Vinyl-Decal' : type === 'windows' ? 'Truck-Back-Window-Graphics' : ''}/${collections[active].first.collectionInfo?.handle
        }`

    function truncate(str: string, n: number) {
        return str.length > n ? str.slice(0, n - 1) + '...' : str
    }

    return (
        <div className='flex flex-col w-full bg-bg-secondary'>
            <div className='flex justify-center gap-[1px] '>
                {titles.map((title, i) => {
                    const label = title === 'All Products' ? 'New!' : title === "Patriotic" ? "Political" : title
                    return (
                        <div
                            key={title}
                            className={cn(
                                'pb-2 pt-2 sm:pt-3 px-4 sm:px-8 rounded-t-lg cursor-pointer opacity-40 text-accent bg-bg-primary hover:opacity-80 transition-all ease-cubic-custom underline text-sm sm:text-lg',
                                active === i && 'bg-bg-primary text-accent opacity-100'
                            )}
                            onClick={() => setActive(i)}>
                            {isXs && label ? truncate(label, 12) : label}
                        </div>
                    )
                })}
            </div>
            <div className='flex justify-end bg-bg-primary py-4 pr-4'>
                <Link
                    className='bg-bg-primary w-max text-sm text-accent hover:text-accent-bright underline flex items-center'
                    href={linkPath}>
                    All {titles[active]}
                    <Chevron
                        direction={Direction.Right}
                        className='w-4 h-4 '
                    />
                </Link>
            </div>
            <div className='relative flex flex-col w-full'>
                <div className='relative flex w-full overflow-hidden'>
                    <div
                        onClick={() => handleClick('top', 'left')}
                        id='left'
                        className='absolute h-32 top-1/2 -translate-y-1/2  items-center flex justify-center bg-backdrop-dark rounded-tr-md rounded-br-md cursor-pointer hover:bg-bg-secondary z-30'>
                        <ChevronLeftLong className='w-12 h-12 text-txt-primary' />
                    </div>
                    <div
                        ref={sliderRef}
                        className='w-full  overflow-x-scroll bg-bg-primary'>
                        <SliderContent products={firstArr[active].products} />
                    </div>
                    <div
                        onClick={() => handleClick('top', 'right')}
                        id='right'
                        className='absolute right-0 h-32 top-1/2 -translate-y-1/2  items-center flex justify-center bg-backdrop-dark rounded-tl-md rounded-bl-md cursor-pointer hover:bg-bg-secondary z-30'>
                        <ChevronRightLong className='w-12 h-12 text-txt-primary' />
                    </div>
                </div>
                {/* {secondArr[active].products.length > 0 && (
     <div className='relative flex w-full pt-3 bg-bg-primary border-t-2 border-accent overflow-hidden'>
      <div
       onClick={() => handleClick('btm', 'left')}
       id='left'
       className='absolute h-32 top-1/2 -translate-y-1/2  items-center flex justify-center bg-backdrop-dark rounded-tr-md rounded-br-md cursor-pointer hover:bg-bg-secondary z-30'>
       <ChevronLeftLong className='w-12 h-12 text-txt-primary' />
      </div>

      <div
       ref={nextRef}
       className='w-full  overflow-x-scroll bg-bg-primary'>
       {secondArr[active].products.length > 0 && <SliderContent products={secondArr[active]?.products} />}
      </div>
      <div
       onClick={() => handleClick('btm', 'right')}
       id='right'
       className='absolute right-0 h-32 top-1/2 -translate-y-1/2  items-center flex justify-center bg-backdrop-dark rounded-tl-md rounded-bl-md cursor-pointer hover:bg-bg-secondary z-30'>
       <ChevronRightLong className='w-12 h-12 text-txt-primary' />
      </div>
     </div>
    )} */}
            </div>
        </div>
    )
}

export default Slider
