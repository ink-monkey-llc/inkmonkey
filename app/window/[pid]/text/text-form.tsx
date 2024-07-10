import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { ErrorToast } from '@/app/toast/error'
import { textContentAtom, textDetailsAtom, selectedVariantAtom } from '@/app/providers/atoms'
import SavedText from './saved-text'
import FormButton from '../form-button'
import { initialSelectedVariant } from '@/app/content/initial-values'
import { text } from 'stream/consumers'

function TextForm() {
 const [textContent, setTextContent] = useAtom(textContentAtom)
 const [textDetails, setTextDetails] = useAtom(textDetailsAtom)
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
 const [isSaved, setIsSaved] = useState(false)
 const handleSave = () => {
  if ((!textContent || textContent === '') && (!textDetails || textDetails === '')) {
   setSelectedVariant(initialSelectedVariant)
   return
  }
  if (!textContent || textContent === '') {
   ErrorToast({ msg: 'Please enter your custom text' })
   return
  }
  setIsSaved(true)
 }
 return (
  <>
   {isSaved ? (
    <SavedText setIsSaved={setIsSaved} />
   ) : (
    <>
     <form className='flex flex-col gap-2 mt-2'>
      <div>
       <label className='text-txt-secondary text-sm'>Your Text:</label>
       <input
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
        className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
        placeholder='"John Q. Public"'
        type='text'
       />
      </div>
      <div>
       <label className='text-txt-secondary text-sm'>Special Instructions:</label>
       <input
        value={textDetails}
        onChange={(e) => setTextDetails(e.target.value)}
        placeholder='Font, text size, font color, etc.'
        className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
        type='text'
       />
      </div>
      {/* <FormButton onClick={handleSave}>Save</FormButton> */}
     </form>
    </>
   )}
  </>
 )
}

export default TextForm
