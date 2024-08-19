import React, { useRef } from 'react'
import SelectIcon from './select-icon'
import Chevron, { Direction } from '@/app/icons/chevron'
import StyleList from './style-list'
import { useOnClickOutside } from 'usehooks-ts'
import { cn } from '@/utils/cn'
import { useAtom } from 'jotai'
import { styleOpenAtom, selectedStyleAtom, generatedAtom } from '@/app/providers/fonz-atoms'

function StyleSelect() {
 const ref = useRef(null)
 const [styleOpen, setStyleOpen] = useAtom(styleOpenAtom)
 const [generated] = useAtom(generatedAtom)
 const [selectedStyle] = useAtom(selectedStyleAtom)

 useOnClickOutside(ref, () => {
  setStyleOpen(false)
 })

 const handleClick = () => {
  setStyleOpen(!styleOpen && true)
 }
 const isDisabled = generated.productId != ''
 return (
  <div>
   <div className='text-lg pl-2'>Style</div>
   <div
    onClick={handleClick}
    className={cn(
     'bg-bg-tertiary relative mx-2 my-2 p-1 rounded-md flex items-center justify-between pr-4 cursor-pointer',
     isDisabled && 'pointer-events-none'
    )}>
    <div className='flex items-center gap-4'>
     <SelectIcon image={selectedStyle.img} />
     <span>{selectedStyle.label}</span>
    </div>
    <Chevron
     className='w-6 h-6 '
     direction={styleOpen ? Direction.Up : Direction.Down}
    />
   </div>
   <StyleList />
  </div>
 )
}

export default StyleSelect
