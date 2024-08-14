'use client'
import React, { useState } from 'react'
import { questions, Answer } from '@/app/content/survey'
import { useLocalStorage } from 'usehooks-ts'
import SurveyQuestion from './survey-question'
import { createArray } from '@/utils/helpers'
import { cn } from '@/utils/cn'
import Spinner from '@/app/spinner/spinner'

function Survey() {
 const [incomplete, setIncomplete] = useState<string[]>([])
 const [isSubmitting, setIsSubmitting] = useState(false)
 const [discountAuth, setDiscountAuth] = useLocalStorage('discountAuth', { authorized: false })
 const [answers, setAnswers] = useState<Answer[] | []>([
  {
   id: 'q5',
   label: 'Did you use FONZAI, our AI design playground?',
   value: 'Yes',
   detailsLabel: '',
   details: '',
  },
 ])

 const didUseFonz = answers.find((answer) => answer.id === 'q5')?.value === 'Yes'
 const fonzQuestions = questions.filter((question) => question.dependsOn === 'q5')
 const fonzRelated = fonzQuestions.map((question) => question.id)

 const getIncomplete = () => {
  const allIds = createArray()
  const completeIds = answers.map((answer) => answer.id)
  return allIds.filter((id) => !completeIds.includes(id))
 }

 const handleSubmit = async () => {
  let incompleteIds = getIncomplete()
  if (!didUseFonz) {
   incompleteIds = incompleteIds.filter((id) => !fonzRelated.includes(id))
  }
  if (incompleteIds.length > 0) {
   setIncomplete(incompleteIds)
   return
  }
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
   setDiscountAuth({ authorized: true })
  }
 }

 console.log('incomplete:', incomplete)

 return (
  <div className='pb-8 mx-4'>
   <h1 className='text-3xl text-accent text-center my-8 '>New Website Survey</h1>
   <div className='flex flex-col gap-4 max-w-[600px] m-auto'>
    {questions.map((question, i) => (
     <SurveyQuestion
      incomplete={incomplete}
      setIncomplete={setIncomplete}
      didUseFonz={didUseFonz}
      answers={answers}
      setAnswers={setAnswers}
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
