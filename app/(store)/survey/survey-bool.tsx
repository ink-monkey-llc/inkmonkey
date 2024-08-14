import { QuestionData, Answer } from '@/app/content/survey'
import { cn } from '@/utils/cn'
import { questions } from '@/app/content/survey'
import React from 'react'
import { PrimitiveAtom } from 'jotai'

type SurveyBoolProps = {
 question: QuestionData
}

function SurveyBool({ question }: SurveyBoolProps) {
 const fonzQuestions = questions.filter((question) => question.dependsOn === 'q5')
 const fonzRelated = fonzQuestions.map((question) => question.id)
 const opts = ['Yes', 'No']
 const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}

 return (
  <div className='flex justify-center items-center gap-8'>
   {opts.map((opt) => {
    return (
     <div
      onClick={handleSelect}
      id={opt}
      key={opt}
      className='flex flex-col items-center justify-center'>
      <p className={cn('text-white')}>{opt}</p>
      <div className={cn('w-5 h-5 rounded-md bg-white')}></div>
     </div>
    )
   })}
  </div>
 )
}

export default SurveyBool
