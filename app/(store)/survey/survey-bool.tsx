import { QuestionData, Answer } from '@/app/content/survey'
import { cn } from '@/utils/cn'
import { questions } from '@/app/content/survey'
import React from 'react'

type SurveyBoolProps = {
 question: QuestionData
 answers: Answer[] | []
 setAnswers: (answers: Answer[] | []) => void
 incomplete: string[]
 setIncomplete: (incomplete: string[]) => void
}

function SurveyBool({ question, answers, setAnswers, incomplete, setIncomplete }: SurveyBoolProps) {
 const fonzQuestions = questions.filter((question) => question.dependsOn === 'q5')
 const fonzRelated = fonzQuestions.map((question) => question.id)
 const opts = ['Yes', 'No']
 const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  let existingAnswer = answers.find((answer) => answer.id === question.id)
  let newAnswers = [...answers]
  if (existingAnswer) {
   newAnswers = newAnswers.filter((answer) => answer.id !== question.id)
  }
  newAnswers.push({
   id: question.id,
   label: question.label,
   value: opts.find((opt) => opt === e.currentTarget.id),
   detailsLabel: question.detailsLabel ?? '',
   details: existingAnswer?.details ?? '',
  })
  setAnswers(newAnswers)
  const incompleteIds = incomplete.filter((id) => id !== question.id)
  setIncomplete(incompleteIds)
  if (question.id === 'q5') {
   const incompleteIds = incomplete.filter((id) => !fonzRelated.includes(id))
   if (e.currentTarget.id === 'Yes') {
    incompleteIds.push(...fonzRelated)
    setIncomplete(incompleteIds)
   } else {
    const incompleteIds = incomplete.filter((id) => !fonzRelated.includes(id))
    setIncomplete(incompleteIds)
   }
  }
 }

 return (
  <div className='flex justify-center items-center gap-8'>
   {opts.map((opt) => {
    const selected = answers.find((answer) => answer.id === question.id)?.value === opt
    return (
     <div
      onClick={handleSelect}
      id={opt}
      key={opt}
      className='flex flex-col items-center justify-center'>
      <p className={cn('text-white', selected && 'text-accent-bright')}>{opt}</p>
      <div className={cn('w-5 h-5 rounded-md bg-white', selected && 'bg-accent-bright')}></div>
     </div>
    )
   })}
  </div>
 )
}

export default SurveyBool
