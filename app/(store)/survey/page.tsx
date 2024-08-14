'use client'
import React, { useState } from 'react'
import { questions, Answer } from '@/app/content/survey'
import SurveyQuestion from './survey-question'
import { cn } from '@/utils/cn'
import Spinner from '@/app/spinner/spinner'
import { useAtom } from 'jotai'
import { discAuthAtom, isSubmittingAtom, incompleteAtom, answersAtom, questionsAtom } from './state/survey-atoms'

function Survey() {
 const [answers, setAnswers] = useAtom(answersAtom)
 const [qs] = useAtom(questionsAtom)
 const [incomplete, setIncomplete] = useAtom(incompleteAtom)
 const [isSubmitting, setIsSubmitting] = useAtom(isSubmittingAtom)
 const [discAuth, setDiscAuth] = useAtom(discAuthAtom)

 const handleSubmit = async () => {
  setIsSubmitting(true)
  const res = await fetch('/api/send', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(answers),
  })
  if (res.ok) {
   setIsSubmitting(false)
   setIncomplete([])
   setDiscAuth({ authorized: true })
  }
 }

 console.log('incomplete:', incomplete)

 return (
  <div className='pb-8 mx-4'>
   <h1 className='text-3xl text-accent text-center my-8 '>New Website Survey</h1>
   <div className='flex flex-col gap-4 max-w-[600px] m-auto'>
    {questions.map((question, i) => (
     <SurveyQuestion
      atom={qs[question.id as keyof typeof qs]}
      key={question.id}
      question={question}
     />
    ))}
    <div className={cn('text-red-600  opacity-0 text-center', incomplete.length > 0 && 'opacity-1')}>Please complete the questions outlined in red</div>
    <button
     onClick={handleSubmit}
     className='bg-accent text-bg-primary font-bold text-lg h-12 py-2 px-4 rounded-md hover:bg-accent-bright hover:text-bg-primary transition-all'>
     {isSubmitting ? (
      <Spinner
       small
       dark
      />
     ) : (
      'Submit'
     )}
    </button>
   </div>
  </div>
 )
}

export default Survey
