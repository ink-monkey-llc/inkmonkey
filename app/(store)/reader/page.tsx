'use client'
import React, { useState } from 'react'
import Content, { Answer } from './content'

const App: React.FC = () => {
 const [answers, setAnswers] = useState<Answer[]>([])

 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const fileReader = new FileReader()

  if (event.target.files?.length) {
   fileReader.readAsText(event.target.files[0], 'UTF-8')
   fileReader.onload = (e) => {
    const content = e.target?.result
    try {
     const json = JSON.parse(content as string)
     setAnswers(json) // Assuming the JSON structure matches the Answer array directly
    } catch (error) {
     console.error('Error parsing JSON!', error)
    }
   }
  }
 }

 return (
  <div className='flex flex-col gap-4 max-w-[600px] m-auto py-8'>
   <div className='m-auto p-4 pt-2 bg-bg-secondary rounded-md flex flex-col w-max'>
    <label className='mb-2 text-accent'>Upload a survey results file:</label>
    <input
     type='file'
     onChange={handleFileChange}
     accept='.json'
    />
   </div>
   <Content answers={answers} />
  </div>
 )
}

export default App
