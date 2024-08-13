'use client'
import React, { useState } from 'react'
import { questions, Answer } from '@/app/content/survey'
import SurveyQuestion from './survey-question'

function Survey() {
 const [answers, setAnswers] = useState<Answer[]>()

 return (
  <div className='pb-8'>
   <h1 className='text-2xl text-accent text-center my-4 '>New Website Survey</h1>
   <div className='flex flex-col gap-4 max-w-[600px] m-auto'>
    {questions.map((question, i) => (
     <SurveyQuestion
      answers={answers}
      setAnswers={setAnswers}
      key={i}
      question={question}
     />
    ))}
    <button className='bg-accent text-bg-primary font-bold text-lg py-2 px-4 rounded-md hover:bg-accent-bright hover:text-bg-primary transition-all'>
     Submit
    </button>
   </div>
  </div>
 )
}

export default Survey
