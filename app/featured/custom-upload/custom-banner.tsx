import { ArrowRight } from '@/app/icons/arrow-right'
import { smooch } from '@/lib/fonts'
import { cn } from '@/utils/cn'
import Link from 'next/link'


export default function CustomBanner() {
  return (
    <div className='w-full bg-bg-secondary border-y-4 border-accent-tr'>
      <p className={cn('text-accent text-4xl md:text-5xl font-bold text-center pt-8', smooch.className)}>Custom Designs</p>
      <p className='text-txt-secondary text-center text-lg md:text-xl'>{`Upload your own design and we'll print it as a vinyl decal`}</p>
      <Link
       className='px-6 py-2 md:px-2 lg:px-6 m-auto rounded-md border-2 bg-accent border-accent w-full sm:w-max text-xl text-bg-primary font-bold hover:bg-accent-bright hover:text-bg-primary transition-all group flex items-center justify-center gap-2 my-8 shadow-lg shadow-black'
       href='/upload'>
       Upload and buy!
       <ArrowRight className='w-6 h-6 text-bg-primary group-hover:translate-x-3 transition-all' />
      </Link>
    </div>
  )
}