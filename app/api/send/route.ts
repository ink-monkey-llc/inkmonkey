import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
 const dateTime = new Date().toISOString()
 const body = await request.json()
 const jsonBuffer = Buffer.from(JSON.stringify(body))
 try {
  const { data, error } = await resend.emails.send({
   from: 'jordan@jrobertsweb.dev',
   to: ['inkmonkeyllc@gmail.com', 'jordan@inkmonkeyllc.com'],
   subject: 'Ink Monkey - Website Survey',
   text: 'Survey results are attached',
   attachments: [
    {
     filename: `survey-${dateTime}.json`,
     content: jsonBuffer,
     content_type: 'application/json',
    },
   ],
  })
  return new Response(JSON.stringify(data), { status: 200 })
 } catch (error) {
  console.log('error:', error)
  return new Response(JSON.stringify(error), { status: 500 })
 }
}
