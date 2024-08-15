'use client'
import React from 'react'
import SurveySubmit from './survey-submit'
import SurveyProgress from './survey-progress'
import SurveyQuestion from './survey-question'
import useValidateAnswers from './useValidateAnswers'
import { cn } from '@/utils/cn'
import { questions } from '@/app/content/survey'
import { useAtom } from 'jotai'
import { initSubmitAtom } from './state/survey-atoms'

function Survey() {
 const [initSubmit, setInitSubmit] = useAtom(initSubmitAtom)
 const { answersData, incomplete, progress } = useValidateAnswers()
 return (
  <div className='pb-8 mx-4 relative'>
   <SurveyProgress progress={progress} />
   <h1 className='text-3xl text-accent text-center my-8 '>New Website Survey</h1>
   <div className='flex flex-col gap-4 max-w-[600px] m-auto'>
    {questions.map((question, i) => (
     <SurveyQuestion
      key={question.id}
      question={question}
     />
    ))}
   </div>
   <div className='flex flex-col max-w-[600px] m-auto mb-2'>
    <div className={cn('text-red-600  opacity-0 text-center mb-4', initSubmit && incomplete && 'opacity-1')}>Please complete the questions outlined in red</div>
    <SurveySubmit />
   </div>
  </div>
 )
}

export default Survey
