import { Answer, QuestionData } from '@/app/content/survey'
import { PrimitiveAtom } from 'jotai'
import React from 'react'

type SurveyDetailsProps = {
 question: QuestionData
}

function SurveyDetails({ question }: SurveyDetailsProps) {
 const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {}
 return (
  <div>
   <p className='my-2'>{question.detailsLabel}</p>
   <textarea
    onChange={handleChange}
    value={''}
    className='w-full rounded-md border border-slate-tr p-1 bg-bg-tertiary text-txt-primary'
    name={question.id}
    id={question.id}
    cols={20}
    rows={3}></textarea>
  </div>
 )
}

export default SurveyDetails
