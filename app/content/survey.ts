export type QuestionData = {
 id: string
 label: string
 range?: string[]
 boolean?: boolean
 details: boolean
 detailsLabel?: string
 dependsOn?: string
}

export type Answer = {
 id: string
 label: string
 value: string
 detailsLabel?: string
 details?: string
}

export const questions: QuestionData[] = [
 {
  id: 'q1',
  label: 'Did you have a positive first impression of the website?',
  range: ['Very positive', 'Somewhat positive', 'Neutral', 'Somewhat negative', 'Very negative'],
  details: false,
 },
 {
  id: 'q2',
  label: 'Was it easy to find the products you were looking for?',
  range: ['Very easy', 'Somewhat easy', 'Neutral', 'Somewhat difficult', 'Very difficult'],
  details: false,
 },
 {
  id: 'q18',
  label: 'How easy was it to navigate the website?',
  range: ['Very easy', 'Somewhat easy', 'Neutral', 'Somewhat difficult', 'Very difficult'],
  details: false,
 },
 {
  id: 'q19',
  label: 'Is the information on the website easy to understand? Are there any areas where you think more information is needed?',
  details: true,
 },
 {
  id: 'q3',
  label: 'Did we have categories you were interested in?',
  range: ['Very interested', 'Somewhat interested', 'Neutral', 'Somewhat uninterested', 'Very uninterested'],
  details: true,
  detailsLabel: 'What categories of designs would you like to see more of?',
 },
 {
  id: 'q4',
  label: 'How would you rate the overall appearance of the website?',
  range: ['Very good', 'Somewhat good', 'Neutral', 'Somewhat bad', 'Very bad'],
  details: false,
  detailsLabel: 'What would you change about the design of the website?',
 },
 {
  id: 'q5',
  label: 'Did you use FONZAI, our AI design playground?',
  boolean: true,
  details: false,
 },
 {
  id: 'q6',
  label: 'Were you able to figure out how to use FONZAI quickly?',
  boolean: true,
  details: false,
  dependsOn: 'q5',
 },
 {
  id: 'q7',
  label: 'How would you rate your overall experience using FONZAI, our AI design playground?',
  range: ['Very good', 'Somewhat good', 'Neutral', 'Somewhat bad', 'Very bad'],
  details: false,
  dependsOn: 'q5',
 },
 {
  id: 'q8',
  label: 'What could we do to improve FONZAI, our AI design playground?',
  details: true,
  dependsOn: 'q5',
 },
 {
  id: 'q9',
  label: 'Did you know you could add text to your FONZAI designs?',
  boolean: true,
  details: false,
 },
 {
  id: 'q10',
  label: 'What was the worst aspect of FONZAI, our AI design playground?',
  details: true,
  dependsOn: 'q5',
 },
 {
  id: 'q11',
  label: 'What was the best aspect of FONZAI, our AI design playground?',
  details: true,
  dependsOn: 'q5',
 },
 {
  id: 'q14',
  label: 'Do you feel that our FONZAI decal pricing is a good value?',
  range: ['Very good', 'Somewhat good', 'Neutral', 'Somewhat bad', 'Very bad'],
  details: false,
  dependsOn: 'q5',
 },
 {
  id: 'q15',
  label: 'Do you feel that our FONZAI Truck Back Window Graphics pricing is a good value?',
  range: ['Very good', 'Somewhat good', 'Neutral', 'Somewhat bad', 'Very bad'],
  details: false,
  dependsOn: 'q5',
 },
 {
  id: 'q12',
  label: 'Do you feel that our regular decal pricing is a good value?',
  range: ['Very good', 'Somewhat good', 'Neutral', 'Somewhat bad', 'Very bad'],
  details: false,
 },
 {
  id: 'q13',
  label: 'Do you feel that our regular Truck Back Window Graphics pricing is a good value?',
  range: ['Very good', 'Somewhat good', 'Neutral', 'Somewhat bad', 'Very bad'],
  details: false,
 },
 {
  id: 'q20',
  label: 'Were there any broken elements or bugs you encountered on the website / FONZAI?',
  details: true,
 },
 {
  id: 'q16',
  label: 'How likely are you to return to ink-monkey.com for future purchases?',
  range: ['Very likely', 'Somewhat likely', 'Neutral', 'Somewhat unlikely', 'Very unlikely'],
  details: false,
 },
 {
  id: 'q17',
  label: 'How likely are you to recommend ink-monkey.com to a friend?',
  range: ['Very likely', 'Somewhat likely', 'Neutral', 'Somewhat unlikely', 'Very unlikely'],
  details: false,
 },
 {
  id: 'q21',
  label: 'Do you have any additional comments or suggestions for improving the website?',
  details: true,
 },
]
