import React from 'react'
import SurveyRange from './survey-range'
import { cn } from '@/utils/cn'
import type { QuestionData, Answer } from '@/app/content/survey'
import SurveyBool from './survey-bool'
import SurveyDetails from './survey-details'
import { useAtom } from 'jotai'
import { questionsAtom } from './state/survey-atoms'

type SurveyQuestionProps = {
 question: QuestionData
}

function SurveyQuestion({ question }: SurveyQuestionProps) {
 const [questions] = useAtom(questionsAtom)
 const atom = questions[question.id as keyof typeof questions]
 const answer = useAtom(atom)
 if (question.id === 'q5') {
  console.log('q5:', answer)
 }
 return (
  <div className={cn('bg-bg-primary rounded-md p-4 pt-2 border-2 border-transparent')}>
   <p className='text-lg pb-2'>{question.label}</p>
   {question.range && <SurveyRange question={question} />}
   {question.details && <SurveyDetails question={question} />}
   {question.boolean && (
    <div className='flex justify-center items-center gap-8'>
     <SurveyBool question={question} />
    </div>
   )}
  </div>
 )
}

export default SurveyQuestion
