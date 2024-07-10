import React, { useState } from 'react'
import UploadLogo from './upload-logo'
import { useAtom } from 'jotai'
import {
 businessNameAtom,
 businessSloganAtom,
 businessContactAtom,
 businessLocationAtom,
 businessEtcAtom,
 selectedLogoOptionAtom,
 selectedVariantAtom,
 selectedLogoFileAtom,
} from '@/app/providers/atoms'
import FormButton from '../form-button'
import SavedBusiness from './saved-business'
import { ErrorToast } from '@/app/toast/error'
import { initialSelectedVariant } from '@/app/content/initial-values'

type BusinessFormProps = {}

function BusinessForm({}: BusinessFormProps) {
 const [isSaved, setIsSaved] = useState(false)
 const [businessName, setBusinessName] = useAtom(businessNameAtom)
 const [businessSlogan, setBusinessSlogan] = useAtom(businessSloganAtom)
 const [businessContact, setBusinessContact] = useAtom(businessContactAtom)
 const [businessLocation, setBusinessLocation] = useAtom(businessLocationAtom)
 const [businessEtc, setBusinessEtc] = useAtom(businessEtcAtom)
 const [selectedLogoOption, setSelectedLogoOption] = useAtom(selectedLogoOptionAtom)
 const [selectedVariant, setSelectedVariant] = useAtom(selectedVariantAtom)
 const [selectedLogoFile, setSelectedLogoFile] = useAtom(selectedLogoFileAtom)

 const handleSave = () => {
  if (!businessSlogan && !businessLocation && !businessContact && !businessEtc && !businessName && !selectedLogoOption) {
   setSelectedVariant(initialSelectedVariant)
   return
  }
  if (!!selectedLogoFile && !selectedLogoOption) {
   ErrorToast({ msg: 'Please specify your logo option' })
   return
  }
  if (!businessName) {
   ErrorToast({ msg: 'Please specify your business name' })
   return
  }
  setIsSaved(true)
 }

 return (
  <>
   {isSaved ? (
    <SavedBusiness setIsSaved={setIsSaved} />
   ) : (
    <form className='flex flex-col mt-2 cursor-auto'>
     <div className='pb-2'>
      <label htmlFor='name'>
       Business Name:<span className='text-red-500'>*</span>
      </label>
      <input
       value={businessName}
       onChange={(e) => setBusinessName(e.target.value)}
       required
       className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
       type='text'
       placeholder='Best co.'
       name='name'
       id='name'
      />
     </div>
     <div className='pb-2'>
      <label htmlFor='slogan'>Slogan:</label>
      <input
       value={businessSlogan}
       onChange={(e) => setBusinessSlogan(e.target.value)}
       className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
       type='text'
       placeholder='"The absolute best"'
       name='name'
       id='name'
      />
     </div>
     <div>
      <label htmlFor='location'>Location Info:</label>
      <textarea
       value={businessLocation}
       onChange={(e) => setBusinessLocation(e.target.value)}
       className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
       placeholder='Address, City, State, etc. '
       name='location'
       id='location'
      />
     </div>
     <div>
      <label htmlFor='contact'>Contact Info:</label>
      <textarea
       value={businessContact}
       onChange={(e) => setBusinessContact(e.target.value)}
       className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
       placeholder='Phone, Email, Website, etc. '
       name='contact'
       id='contact'
      />
     </div>
     <div className='flex flex-col'>
      <label htmlFor='etc'>Etc:</label>
      <input
       value={businessEtc}
       onChange={(e) => setBusinessEtc(e.target.value)}
       className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
       type='text'
       placeholder='Any other info you want to add'
       name='etc'
       id='etc'
      />
     </div>
     <UploadLogo />
     <FormButton onClick={handleSave}>Save</FormButton>
    </form>
   )}
  </>
 )
}

export default BusinessForm
