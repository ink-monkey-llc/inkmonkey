import React from 'react'
import SurveyRange from './survey-range'
import type { QuestionData, Answer } from '@/app/content/survey'
import SurveyBool from './survey-bool'

type SurveyQuestionProps = {
 question: QuestionData
 answers: Answer[] | undefined
 setAnswers: (answers: Answer[]) => void
}

function SurveyQuestion({ question, answers, setAnswers }: SurveyQuestionProps) {
 return (
  <div className=' bg-bg-primary rounded-md p-4 pt-2'>
   <p className='text-lg pb-2'>{question.label}</p>
   {question.range && (
    <SurveyRange
     answers={answers}
     setAnswers={setAnswers}
     question={question}
    />
   )}
   {question.details && (
    <div>
     <p className='my-2'>{question.detailsLabel}</p>
     <textarea
      className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
      name={question.id}
      id={question.id}
      cols={20}
      rows={3}></textarea>
    </div>
   )}
   {question.boolean && (
    <div className='flex justify-center items-center gap-8'>
     <SurveyBool label='Yes' />
     <SurveyBool label='No' />
    </div>
   )}
  </div>
 )
}

export default SurveyQuestion
