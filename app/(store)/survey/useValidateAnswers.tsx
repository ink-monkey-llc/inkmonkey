import { useMemo } from 'react'
import { useAtom } from 'jotai'
import { questions } from '@/app/content/survey'
import {
 answersAtom,
 a1Atom,
 a2Atom,
 a3Atom,
 a4Atom,
 a5Atom,
 a6Atom,
 a7Atom,
 a8Atom,
 a9Atom,
 a10Atom,
 a11Atom,
 a12Atom,
 a13Atom,
 a14Atom,
 a15Atom,
 a16Atom,
 a17Atom,
 a18Atom,
 a19Atom,
 a20Atom,
 a21Atom,
} from './state/survey-atoms'
export default function useValidateAnswers() {
 const [answers, setAnswers] = useAtom(answersAtom)
 const [a1] = useAtom(a1Atom)
 const [a2] = useAtom(a2Atom)
 const [a3] = useAtom(a3Atom)
 const [a4] = useAtom(a4Atom)
 const [a5] = useAtom(a5Atom)
 const [a6] = useAtom(a6Atom)
 const [a7] = useAtom(a7Atom)
 const [a8] = useAtom(a8Atom)
 const [a9] = useAtom(a9Atom)
 const [a10] = useAtom(a10Atom)
 const [a11] = useAtom(a11Atom)
 const [a12] = useAtom(a12Atom)
 const [a13] = useAtom(a13Atom)
 const [a14] = useAtom(a14Atom)
 const [a15] = useAtom(a15Atom)
 const [a16] = useAtom(a16Atom)
 const [a17] = useAtom(a17Atom)
 const [a18] = useAtom(a18Atom)
 const [a19] = useAtom(a19Atom)
 const [a20] = useAtom(a20Atom)
 const [a21] = useAtom(a21Atom)
 const answersData = [
  { ...a1 },
  { ...a2 },
  { ...a3 },
  { ...a4 },
  { ...a5 },
  { ...a6 },
  { ...a7 },
  { ...a8 },
  { ...a9 },
  { ...a10 },
  { ...a11 },
  { ...a12 },
  { ...a13 },
  { ...a14 },
  { ...a15 },
  { ...a16 },
  { ...a17 },
  { ...a18 },
  { ...a19 },
  { ...a20 },
  { ...a21 },
 ]
 const dependentIds = questions.filter((question) => question.dependsOn === 'q5').map((question) => question.id)
 let incompleteIds = answersData.filter((answer) => !answer.isCompleted).map((answer) => answer.id)
 if (a5?.value === 'No') {
  incompleteIds = incompleteIds.filter((id) => !dependentIds.includes(id))
 }
 const incomplete = incompleteIds.length > 0 ? true : false
 //  console.log('incomplete:', incompleteIds)
 return { answersData, incomplete }
}
