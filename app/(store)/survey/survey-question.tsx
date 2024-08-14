import React from 'react'
import SurveyRange from './survey-range'
import { cn } from '@/utils/cn'
import type { QuestionData, Answer } from '@/app/content/survey'
import SurveyBool from './survey-bool'
import SurveyDetails from './survey-details'

type SurveyQuestionProps = {
 incomplete: string[]
 setIncomplete: (incomplete: string[]) => void
 question: QuestionData
 answers: Answer[] | []
 setAnswers: (answers: Answer[] | []) => void
 didUseFonz: boolean
}

function SurveyQuestion({ question, answers, setAnswers, didUseFonz, incomplete, setIncomplete }: SurveyQuestionProps) {
 const disabled = !didUseFonz && question.dependsOn === 'q5'
 const isIncomplete = incomplete.includes(question.id)
 return (
  <div
   className={cn(
    'bg-bg-primary rounded-md p-4 pt-2 border-2 border-transparent',
    disabled && 'hidden',
    isIncomplete && !disabled && ' border-2 border-red-600'
   )}>
   <p className='text-lg pb-2'>{question.label}</p>
   {question.range && (
    <SurveyRange
     incomplete={incomplete}
     setIncomplete={setIncomplete}
     answers={answers}
     setAnswers={setAnswers}
     question={question}
    />
   )}
   {question.details && (
    <SurveyDetails
     incomplete={incomplete}
     setIncomplete={setIncomplete}
     question={question}
     answers={answers}
     setAnswers={setAnswers}
    />
   )}
   {question.boolean && (
    <div className='flex justify-center items-center gap-8'>
     <SurveyBool
      incomplete={incomplete}
      setIncomplete={setIncomplete}
      question={question}
      answers={answers}
      setAnswers={setAnswers}
     />
    </div>
   )}
  </div>
 )
}

export default SurveyQuestion
