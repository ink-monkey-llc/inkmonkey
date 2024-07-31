import React from 'react'
import { useAtom } from 'jotai'
import { makeAtom, modelAtom } from '@/app/providers/atoms'

function MakeModel() {
 const [make, setMake] = useAtom(makeAtom)
 const [model, setModel] = useAtom(modelAtom)
 return (
  <div>
   <label className='text-txt-secondary text-sm'>Make:</label>
   <input
    onChange={(e) => setMake(e.target.value)}
    className='w-full rounded-md border border-slate-tr px-2 bg-bg-tertiary text-txt-primary'
    placeholder='Ford, Chevy, etc.'
    type='text'
   />
   <label className='text-txt-secondary text-sm'>Model:</label>
   <input
    onChange={(e) => setModel(e.target.value)}
    className='w-full rounded-md border border-slate-tr px-2 bg-bg-tertiary text-txt-primary'
    placeholder='Model'
    type='text'
   />
  </div>
 )
}

export default MakeModel
