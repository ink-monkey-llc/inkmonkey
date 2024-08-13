import React from 'react'

function SurveyBool({ label }: { label: string }) {
 return (
  <div className='flex flex-col items-center justify-center'>
   <p>{label}</p>
   <div className='w-5 h-5 rounded-md bg-white'></div>
  </div>
 )
}

export default SurveyBool
