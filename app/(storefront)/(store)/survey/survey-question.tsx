import React from 'react'
import { cn } from '@/utils/cn'
import SurveyRange from './survey-range'
import SurveyDetails from './survey-details'
import SurveyBool from './survey-bool'
import { Check } from '@/app/icons/check'
import type { QuestionData } from '@/app/content/survey'
import { useAtom } from 'jotai'
import { a5Atom, questionsAtom, initSubmitAtom } from './state/survey-atoms'

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
  <div className={cn('bg-bg-primary rounded-md p-4 pt-1 border-2 border-transparent', isDisabled && 'hidden', isIncomplete && 'border-2 border-red-600')}>
   <Check className={cn('w-6 h-6 ml-auto opacity-15 text-accent-bright', answer?.isCompleted && 'opacity-100')} />
   <p className='text-lg pb-2 leading-tight'>{question.label}</p>

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
