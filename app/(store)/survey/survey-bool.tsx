import { QuestionData, Answer } from '@/app/content/survey'
import { cn } from '@/utils/cn'
import { questions } from '@/app/content/survey'
import React from 'react'
import { useAtom } from 'jotai'
import { questionsAtom } from './state/survey-atoms'

type SurveyBoolProps = {
 question: QuestionData
}

function SurveyBool({ question }: SurveyBoolProps) {
 const opts = ['Yes', 'No']
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
  <div className='flex justify-center items-center gap-8'>
   {opts.map((opt) => {
    const selected = answer?.value === opt
    return (
     <div
      onClick={handleSelect}
      id={opt}
      key={opt}
      className='flex flex-col items-center justify-center'>
      <p className={cn('text-white', selected && 'text-accent')}>{opt}</p>
      <div className={cn('w-5 h-5 rounded-md bg-white', selected && 'bg-accent')}></div>
     </div>
    )
   })}
  </div>
 )
}

export default SurveyBool
