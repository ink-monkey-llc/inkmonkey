import { Answer, QuestionData } from '@/app/content/survey'
import { cn } from '@/utils/cn'
import React from 'react'

type SurveyRangeProps = {
 incomplete: string[]
 setIncomplete: (incomplete: string[]) => void
 question: QuestionData
 answers: Answer[] | []
 setAnswers: (answers: Answer[] | []) => void
}

function SurveyRange({ question, setAnswers, answers, incomplete, setIncomplete }: SurveyRangeProps) {
 const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const questionId = question.id
  let newAnswers = [...answers]
  if (newAnswers.find((answer) => answer.id === questionId)) {
   newAnswers = newAnswers.filter((answer) => answer.id !== questionId)
  }
  newAnswers.push({ id: questionId, label: question.label, value: question.range ? question.range[Number(e.currentTarget.id)] : '' })
  setAnswers(newAnswers)
  const incompleteIds = incomplete.filter((id) => id !== questionId)
  setIncomplete(incompleteIds)
 }

 return (
  <div className='grid grid-cols-5 border border-accent-tr rounded-md py-2'>
   {question &&
    question?.range?.map((item, i) => {
     const selected = answers.find((answers) => answers.id === question.id)?.value === item
     return (
      <div
       onClick={handleSelect}
       id={i.toString()}
       key={i + question.id}
       className='flex flex-col items-center justify-center'>
       <p className={cn('flex items-center text-center text-xs h-8', selected && 'text-accent-bright')}>{item}</p>
       <div className={cn('w-4 h-4 rounded-full bg-white transition-all', selected && 'bg-accent-bright ')}></div>
      </div>
     )
    })}
  </div>
 )
}

export default SurveyRange
