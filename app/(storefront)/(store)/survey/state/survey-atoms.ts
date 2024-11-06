import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Answer } from '@/app/content/survey'

export const answerDefault = { isCompleted: false, label: '', value: '', detailsLabel: '', details: '' }

export const initSubmitAtom = atom(false)
export const isSubmittingAtom = atom(false)
export const discAuthAtom = atomWithStorage('discountAuth', { authorized: false })

export const a1Atom = atom<Answer>({ id: 'q1', ...answerDefault })
export const a2Atom = atom<Answer>({ id: 'q2', ...answerDefault })
export const a3Atom = atom<Answer>({ id: 'q3', ...answerDefault })
export const a4Atom = atom<Answer>({ id: 'q4', ...answerDefault })

export const a5Atom = atom<Answer>({
 isCompleted: true,
 id: 'q5',
 label: 'Did you use FONZAI, our AI design playground?',
 value: 'Yes',
 detailsLabel: '',
 details: '',
})
export const a6Atom = atom<Answer>({ id: 'q6', ...answerDefault })
export const a7Atom = atom<Answer>({ id: 'q7', ...answerDefault })
export const a8Atom = atom<Answer>({ id: 'q8', ...answerDefault })
export const a9Atom = atom<Answer>({ id: 'q9', ...answerDefault })
export const a10Atom = atom<Answer>({ id: 'q10', ...answerDefault })
export const a11Atom = atom<Answer>({ id: 'q11', ...answerDefault })
export const a12Atom = atom<Answer>({ id: 'q12', ...answerDefault })
export const a13Atom = atom<Answer>({ id: 'q13', ...answerDefault })
export const a14Atom = atom<Answer>({ id: 'q14', ...answerDefault })
export const a15Atom = atom<Answer>({ id: 'q15', ...answerDefault })
export const a16Atom = atom<Answer>({ id: 'q16', ...answerDefault })
export const a17Atom = atom<Answer>({ id: 'q17', ...answerDefault })
export const a18Atom = atom<Answer>({ id: 'q18', ...answerDefault })
export const a19Atom = atom<Answer>({ id: 'q19', ...answerDefault })
export const a20Atom = atom<Answer>({ id: 'q20', ...answerDefault })
export const a21Atom = atom<Answer>({ id: 'q21', ...answerDefault })

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
