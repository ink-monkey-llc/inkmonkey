import React from 'react'

function FormButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
 return (
  <div
   onClick={onClick}
   className='bg-accent flex justify-center p-2 text-bg-primary font-semibold rounded-md w-4/5 m-auto my-1'>
   {children}
  </div>
 )
}

export default FormButton
