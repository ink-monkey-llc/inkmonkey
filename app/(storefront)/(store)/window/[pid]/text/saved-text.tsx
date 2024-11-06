import React from 'react'
import { useAtomValue } from 'jotai'
import { textContentAtom, textDetailsAtom } from '@/app/providers/atoms'
import FormButton from '../form-button'
function SavedText({ setIsSaved }: { setIsSaved: (arg: boolean) => void }) {
 const textContent = useAtomValue(textContentAtom)
 const textDetails = useAtomValue(textDetailsAtom)
 return (
  <div className='flex flex-col p-2'>
   <p className='text-txt-secondary text-xs'>Your Text:</p>
   <p className='text-txt-primary'>{textContent}</p>
   <p className='text-txt-secondary text-xs mt-2'>Special Instructions:</p>
   <p className='text-txt-primary text-sm mb-2'>{textDetails}</p>
   <FormButton onClick={() => setIsSaved(false)}>Edit</FormButton>
  </div>
 )
}

export default SavedText
