import React from 'react'

export type Answer = {
 isCompleted: boolean
 id: string
 label: string
 value?: string
 detailsLabel?: string
 details?: string
}

interface ContentProps {
 answers: Answer[]
}

const Content: React.FC<ContentProps> = ({ answers }) => {
 return (
  <div className='flex flex-col gap-4 max-w-[600px] m-auto'>
   {answers.map((answer) => {
    if (!answer.isCompleted) {
     return null
    }
    return (
     <div
      className='flex flex-col bg-bg-primary rounded-md p-4 '
      key={answer.id}>
      <h2 className='text-xl text-accent'>{answer.label}</h2>
      {answer.value && (
       <p className='flex gap-2 my-2'>
        <b className='text-accent font-light'>{answer.value === ('Yes' || 'No') ? 'Answer:' : 'Rating (1 is best, 5 is worst) :'}</b> {answer.value}
       </p>
      )}
      {answer.details && (
       <p className='flex flex-col '>
        {answer.detailsLabel && <b className='text-accent'>{answer.detailsLabel}:</b>} {answer.details}
       </p>
      )}
     </div>
    )
   })}
  </div>
 )
}

export default Content
