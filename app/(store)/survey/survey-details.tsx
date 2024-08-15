import { Answer, QuestionData } from '@/app/content/survey'
import { useAtom } from 'jotai'
import React from 'react'
import { questionsAtom, answerDefault } from './state/survey-atoms'

type SurveyDetailsProps = {
 question: QuestionData
}

function SurveyDetails({ question }: SurveyDetailsProps) {
 const [questions] = useAtom(questionsAtom)
 const atom = questions[question.id as keyof typeof questions]
 const [answer, setAnswer] = useAtom(atom)

 const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setAnswer({
   isCompleted: true,
   id: question.id,
   label: question.label,
   value: answer?.value,
   detailsLabel: question.detailsLabel,
   details: e.currentTarget.value,
  })
 }

 return (
  <div>
   <p className='my-2'>{question.detailsLabel}</p>
   <textarea
    onChange={handleChange}
    value={answer?.details}
    className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
    name={question.id}
    id={question.id}
    cols={20}
    rows={3}></textarea>
  </div>
 )
}

export default SurveyDetails
