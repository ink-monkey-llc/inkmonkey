import { Answer, QuestionData } from '@/app/content/survey'
import React from 'react'

type SurveyDetailsProps = {
 question: QuestionData
 answers: Answer[] | []
 setAnswers: (answers: Answer[] | []) => void
 incomplete: string[]
 setIncomplete: (incomplete: string[]) => void
}

function SurveyDetails({ question, answers, setAnswers, incomplete, setIncomplete }: SurveyDetailsProps) {
 const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  let existingAnswer = answers.find((answer) => answer.id === question.id)
  let newAnswers = [...answers]
  if (existingAnswer) {
   newAnswers = newAnswers.filter((answer) => answer.id !== question.id)
  }
  newAnswers.push({
   id: question.id,
   label: question.label,
   details: e.target.value ?? '',
   detailsLabel: question.detailsLabel ?? '',
   value: existingAnswer?.value ?? '',
  })
  setAnswers(newAnswers)
  const incompleteIds = incomplete.filter((id) => id !== question.id)
  setIncomplete(incompleteIds)
 }
 return (
  <div>
   <p className='my-2'>{question.detailsLabel}</p>
   <textarea
    onChange={handleChange}
    value={answers.find((answer) => answer.id === question.id)?.details}
    className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
    name={question.id}
    id={question.id}
    cols={20}
    rows={3}></textarea>
  </div>
 )
}

export default SurveyDetails
