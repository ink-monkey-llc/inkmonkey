import React from 'react'
import { questions } from '@/app/content/survey'
import SurveyRange from './survey-range'
import { cn } from '@/utils/cn'
import type { QuestionData } from '@/app/content/survey'
import SurveyBool from './survey-bool'
import SurveyDetails from './survey-details'
import { useAtom } from 'jotai'
import { a5Atom, questionsAtom, initSubmitAtom } from './state/survey-atoms'
import { init } from 'next/dist/compiled/webpack/webpack'

type SurveyQuestionProps = {
 question: QuestionData
}

function SurveyQuestion({ question }: SurveyQuestionProps) {
 const [questions] = useAtom(questionsAtom)
 const atom = questions[question.id as keyof typeof questions]
 const [answer, setAnswer] = useAtom(atom)
 const [initSubmit] = useAtom(initSubmitAtom)
 const [a5] = useAtom(a5Atom)
 const isFonzRelated = question.dependsOn === 'q5'
 const didUseFonz = a5?.value === 'Yes'
 const isDisabled = isFonzRelated && !didUseFonz
 const isIncomplete = answer?.isCompleted === false && initSubmit
 return (
  <div className={cn('bg-bg-primary rounded-md p-4 pt-2 border-2 border-transparent', isDisabled && 'hidden', isIncomplete && 'border-2 border-red-600')}>
   <p className='text-lg pb-2'>{question.label}</p>
   {question.range && <SurveyRange question={question} />}
   {question.details && <SurveyDetails question={question} />}
   {question.boolean && (
    <div className='flex justify-center items-center gap-8'>
     <SurveyBool question={question} />
    </div>
   )}
  </div>
 )
}

export default SurveyQuestion
