import { QuestionData } from '@/app/content/survey'
import { cn } from '@/utils/cn'
import { useAtom } from 'jotai'
import React from 'react'
import { questionsAtom } from './state/survey-atoms'

type SurveyRangeProps = {
 question: QuestionData
}

function SurveyRange({ question }: SurveyRangeProps) {
 const [questions] = useAtom(questionsAtom)
 const atom = questions[question.id as keyof typeof questions]
 const answer = useAtom(atom)

 const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}

 return (
  <div className='grid grid-cols-5 border border-accent-tr rounded-md py-2'>
   {question &&
    question?.range?.map((item, i) => {
     return (
      <div
       onClick={handleSelect}
       id={i.toString()}
       key={i + question.id}
       className='flex flex-col items-center justify-center'>
       <p className={cn('flex items-center text-center text-xs h-8')}>{item}</p>
       <div className={cn('w-4 h-4 rounded-full bg-white transition-all')}></div>
      </div>
     )
    })}
  </div>
 )
}

export default SurveyRange
