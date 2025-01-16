import { Resend } from 'resend'
import prisma from '@/lib/db'
import Email from '@/app/(storefront)/(store)/email/results-link'

const resend = new Resend(process.env.RESEND_API_KEY)

const saveResults = async (data: {
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
            to: ['inkmonkeyllc@gmail.com', 'jordan.inkmonkey@gmail.com'],
            subject: 'Ink Monkey - Website Survey',
            react: Email({ id }),

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
