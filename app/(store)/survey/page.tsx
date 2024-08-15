'use client'
import React from 'react'
import { questions } from '@/app/content/survey'
import SurveyQuestion from './survey-question'
import { cn } from '@/utils/cn'
import useValidateAnswers from './useValidateAnswers'
import { useAtom } from 'jotai'
import { initSubmitAtom } from './state/survey-atoms'
import SurveySubmit from './survey-submit'
import { init } from 'next/dist/compiled/webpack/webpack'

function Survey() {
 const [initSubmit, setInitSubmit] = useAtom(initSubmitAtom)
 const { answersData, incomplete } = useValidateAnswers()
 return (
  <div className='pb-8 mx-4'>
   <h1 className='text-3xl text-accent text-center my-8 '>New Website Survey</h1>
   <div className='flex flex-col gap-4 max-w-[600px] m-auto'>
    {questions.map((question, i) => (
     <SurveyQuestion
      key={question.id}
      question={question}
     />
    ))}
    <div className={cn('text-red-600  opacity-0 text-center', initSubmit && incomplete && 'opacity-1')}>Please complete the questions outlined in red</div>
    <SurveySubmit />
   </div>
  </div>
 )
}

export default Survey
