import React from 'react'

function TextForm() {
 return (
  <form className='flex flex-col gap-2 mt-2'>
   <div>
    <label className='text-txt-secondary text-sm'>Your Text:</label>
    <input
     className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
     placeholder='"John Q. Public"'
     type='text'
    />
   </div>
   <div>
    <label className='text-txt-secondary text-sm'>Special Instructions:</label>
    <input
     placeholder='Font, text size, font color, etc.'
     className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
     type='text'
    />
   </div>
   <button className='bg-accent p-2 text-bg-primary font-semibold rounded-md w-4/5 m-auto mb-2 mt-1'>Save</button>
  </form>
 )
}

export default TextForm
