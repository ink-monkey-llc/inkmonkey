import React from 'react'
import FormButton from '../form-button'
import Image from 'next/image'
import { useAtomValue } from 'jotai'
import {
 businessNameAtom,
 businessSloganAtom,
 businessContactAtom,
 businessLocationAtom,
 businessEtcAtom,
 logoDataUrlAtom,
 selectedVariantAtom,
} from '@/app/providers/atoms'

function SavedBusiness({ setIsSaved }: { setIsSaved: (arg: boolean) => void }) {
 const businessName = useAtomValue(businessNameAtom)
 const businessSlogan = useAtomValue(businessSloganAtom)
 const businessContact = useAtomValue(businessContactAtom)
 const businessLocation = useAtomValue(businessLocationAtom)
 const businessEtc = useAtomValue(businessEtcAtom)
 const logoDataUrl = useAtomValue(logoDataUrlAtom)
 const selectedVariant = useAtomValue(selectedVariantAtom)
 return (
  <div className='flex flex-col p-2'>
   <p className='text-txt-secondary text-xs'>Business Name:</p>
   <p className='text-txt-primary'>{businessName}</p>
   {businessSlogan !== '' && (
    <>
     <p className='text-txt-secondary text-xs mt-2'>Slogan:</p>
     <p className='text-txt-primary'>{businessSlogan}</p>
    </>
   )}
   {businessContact !== '' && (
    <>
     <p className='text-txt-secondary text-xs mt-2'>Contact Info:</p>
     <p className='text-txt-primary'>{businessContact}</p>
    </>
   )}
   {businessLocation !== '' && (
    <>
     <p className='text-txt-secondary text-xs mt-2'>Location Info:</p>
     <p className='text-txt-primary'>{businessLocation}</p>
    </>
   )}
   {businessEtc !== '' && (
    <>
     <p className='text-txt-secondary text-xs mt-2'>Etc:</p>
     <p className='text-txt-primary'>{businessEtc}</p>
    </>
   )}
   {!!logoDataUrl && (
    <>
     <p className='text-txt-secondary text-xs mt-2'>Logo:</p>
     <div className='flex gap-2 mb-2'>
      <Image
       src={logoDataUrl}
       alt='logo'
       width={75}
       height={75}
      />
      <p className='text-txt-primary'>{selectedVariant?.title}</p>
     </div>
    </>
   )}
   <FormButton onClick={() => setIsSaved(false)}>Edit</FormButton>
  </div>
 )
}
export default SavedBusiness
