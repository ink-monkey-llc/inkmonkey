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
import Link from 'next/link'

function Survey() {
 const [initSubmit, setInitSubmit] = useAtom(initSubmitAtom)
 const { answersData, incomplete, progress } = useValidateAnswers()
 const showProgress = progress > 0 ? true : false
 return (
  <div className=' mx-4 relative'>
   <SurveyProgress progress={progress} />
   <h1 className={cn('text-3xl text-accent text-center mt-[66px] mb-4', showProgress && 'mt-4')}>New Website Survey</h1>
   <div className='w-max m-auto mb-4'>
    <p>
     Give us your feedback on our new website and get a discount code for <span className='font-semibold text-lg text-accent-bright'>100% off</span>
    </p>
    <p>
     {`a vinyl decal up to 5" when you design it with`}{' '}
     <Link
      className='underline'
      href='/fonzai'>
      FONZAI
     </Link>
     {`, our AI design playground.`}
    </p>
   </div>
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
   <p className='text-center text-txt-secondary mt-8 mb-2'>If you experience any issues with the survey, please email us at inkmonkeyllc@gmail.com</p>
  </div>
 )
}

export default Survey
