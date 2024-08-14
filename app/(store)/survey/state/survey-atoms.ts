import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { QuestionData, Answer } from '@/app/content/survey'

export const incompleteAtom = atom<string[]>([])
export const isSubmittingAtom = atom(false)
export const discAuthAtom = atomWithStorage('discountAuth', { authorized: false })

export const answersAtom = atom<Answer[]>([])
export const a1Atom = atom<Answer>()
export const a2Atom = atom<Answer>()
export const a3Atom = atom<Answer>()
export const a4Atom = atom<Answer>()
export const a5Atom = atom<Answer>({
 isCompleted: false,
 id: 'q5',
 label: 'Did you use FONZAI, our AI design playground?',
 value: 'Yes',
 detailsLabel: '',
 details: '',
})
export const a6Atom = atom<Answer>()
export const a7Atom = atom<Answer>()
export const a8Atom = atom<Answer>()
export const a9Atom = atom<Answer>()
export const a10Atom = atom<Answer>()
export const a11Atom = atom<Answer>()
export const a12Atom = atom<Answer>()
export const a13Atom = atom<Answer>()
export const a14Atom = atom<Answer>()
export const a15Atom = atom<Answer>()
export const a16Atom = atom<Answer>()
export const a17Atom = atom<Answer>()
export const a18Atom = atom<Answer>()
export const a19Atom = atom<Answer>()
export const a20Atom = atom<Answer>()
export const a21Atom = atom<Answer>()

export const questionsAtom = atom({
 q1: a1Atom,
 q2: a2Atom,
 q3: a3Atom,
 q4: a4Atom,
 q5: a5Atom,
 q6: a6Atom,
 q7: a7Atom,
 q8: a8Atom,
 q9: a9Atom,
 q10: a10Atom,
 q11: a11Atom,
 q12: a12Atom,
 q13: a13Atom,
 q14: a14Atom,
 q15: a15Atom,
 q16: a16Atom,
 q17: a17Atom,
 q18: a18Atom,
 q19: a19Atom,
 q20: a20Atom,
 q21: a21Atom,
})
