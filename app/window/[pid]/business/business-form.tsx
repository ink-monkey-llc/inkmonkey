import React from 'react'
import UploadLogo from './upload-logo'
import { useAtom } from 'jotai'

type BusinessFormProps = {}

function BusinessForm({}: BusinessFormProps) {
 return (
  <form className='flex flex-col mt-2 cursor-auto'>
   <div className='pb-2'>
    <label htmlFor='name'>
     Business Name:<span className='text-red-500'>*</span>
    </label>
    <input
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
     className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
     placeholder='Address, City, State, etc. '
     name='location'
     id='location'
    />
   </div>
   <div>
    <label htmlFor='contact'>Contact Info:</label>
    <textarea
     className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
     placeholder='Phone, Email, Website, etc. '
     name='contact'
     id='contact'
    />
   </div>
   <div className='flex flex-col'>
    <label htmlFor='etc'>Etc:</label>
    <input
     className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
     type='text'
     placeholder='Any other info you want to add'
     name='etc'
     id='etc'
    />
   </div>
   <UploadLogo />
  </form>
 )
}

export default BusinessForm
