import { Answer, QuestionData } from '@/app/content/survey'
import { cn } from '@/utils/cn'
import React from 'react'

function SurveyRange({ question, setAnswers, answers }: { question: QuestionData; setAnswers: (answers: Answer[]) => void; answers: Answer[] }) {
 const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const index = Number(e.currentTarget.id)
  const newAnswers = [...answers, { id: question.id, label: question.label, value: question.range ? question.range[index] : '' }]
  setAnswers(newAnswers)
 }
 const selected = answers.find((answer) => answer.id === question.id)?.value
 return (
  <div className='grid grid-cols-5 border border-accent-tr rounded-md py-2'>
   {question &&
    question?.range?.map((item, i) => (
     <div
      onClick={handleSelect}
      id={i.toString()}
      key='item'
      className='flex flex-col items-center justify-center'>
      <p className={cn('flex items-center text-center text-xs h-8', selected === i.toString() && 'text-accent-bright')}>{item}</p>
      <div className={cn('w-4 h-4 rounded-full bg-white transition-all', selected === i.toString() && 'bg-accent-bright ')}></div>
     </div>
    ))}
  </div>
 )
}

export default SurveyRange
