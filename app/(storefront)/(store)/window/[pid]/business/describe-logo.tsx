import React from 'react'
import { useAtom } from 'jotai'
import { describeLogoAtom } from '@/app/providers/atoms'

function DescribeLogo() {
 const [describeLogo, setDescribeLogo] = useAtom(describeLogoAtom)
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setDescribeLogo(e.target.value)
 }
 return (
  <div className='flex flex-col gap-2'>
   <label htmlFor='describe-logo'>Describe your logo:</label>
   <input
    className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
    onChange={handleChange}
    value={describeLogo}
    id='describe-logo'
    name='describe-logo'
    type='text'
    placeholder='A purple cow leaping over the moon'
   />
   <p className='text-xs'>We will send you an email for more info or send you a proof.</p>
  </div>
 )
}

export default DescribeLogo
