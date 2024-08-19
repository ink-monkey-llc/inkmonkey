import { Resend } from 'resend'
import prisma from '@/lib/db'

const resend = new Resend(process.env.RESEND_API_KEY)

export const saveResults = async (data: {
 [key: string]: string | string[] | undefined
}): Promise<{
 id: string
 json: string
 createdAt: Date
}> => {
 const { json } = data
 try {
  const result = await prisma.surveyResults.create({
   data: {
    json: JSON.stringify(json),
   },
  })
  console.log('result:', result)
  return result
 } catch (error) {
  console.log('error:', error)
  throw error
 }
}

export async function POST(request: Request) {
 const dateTime = new Date().toISOString()
 const body = await request.json()
 const jsonBuffer = Buffer.from(JSON.stringify(body))
 const { id, json, createdAt } = await saveResults({ json: body })
 try {
  const { data, error } = await resend.emails.send({
   from: 'jordan@jrobertsweb.dev',
   to: ['jrobertswebdev@gmail.com'],
   subject: 'Ink Monkey - Website Survey',
   html: `<a href='https://jrr.at/reader/${id}'> View Survey Results </a>`,

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
