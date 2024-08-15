import { QuestionData, Answer } from '@/app/content/survey'
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
 const [answer, setAnswer] = useAtom(atom)

 const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const id = e.currentTarget.id
  setAnswer({
   isCompleted: true,
   id: question.id,
   label: question.label,
   value: id,
   detailsLabel: answer?.detailsLabel,
   details: answer?.details,
  })
 }

 return (
  <div className='grid grid-cols-5 border border-accent-tr rounded-md py-2'>
   {question &&
    question?.range?.map((item, i) => {
     const selected = answer?.value === (i + 1).toString()
     return (
      <div
       onClick={handleSelect}
       id={(i + 1).toString()}
       key={i + question.id}
       className='flex flex-col items-center justify-center'>
       <p className={cn('flex items-center text-center text-xs h-8', selected && 'text-accent')}>{item}</p>
       <div className={cn('w-4 h-4 rounded-full bg-white transition-all', selected && 'bg-accent')}></div>
      </div>
     )
    })}
  </div>
 )
}

export default SurveyRange
