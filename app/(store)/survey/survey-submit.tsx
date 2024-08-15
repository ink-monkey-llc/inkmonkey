import Spinner from '@/app/spinner/spinner'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import useValidateAnswers from './useValidateAnswers'
import React from 'react'
import { isSubmittingAtom, discAuthAtom, incompleteAtom, answersAtom, initSubmitAtom } from './state/survey-atoms'

function SurveySubmit() {
 const [isSubmitting, setIsSubmitting] = useAtom(isSubmittingAtom)
 const [discAuth, setDiscAuth] = useAtom(discAuthAtom)
 const [initSubmit, setInitSubmit] = useAtom(initSubmitAtom)
 const { answersData, incomplete } = useValidateAnswers()

 const router = useRouter()

 const handleSubmit = async () => {
  setInitSubmit(true)
  if (incomplete) {
   return
  }
  setIsSubmitting(true)
  const res = await fetch('/api/send', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(answersData),
  })
  if (res.ok) {
   setIsSubmitting(false)
   setDiscAuth({ authorized: true })
   router.push('/survey/discount')
  }
 }

 return (
  <button
   onClick={handleSubmit}
   className='bg-accent text-bg-primary font-bold text-lg h-12 py-2 px-4 rounded-md hover:bg-accent-bright hover:text-bg-primary transition-all'>
   {isSubmitting ? (
    <Spinner
     small
     dark
    />
   ) : (
    'Submit'
   )}
  </button>
 )
}

export default SurveySubmit
