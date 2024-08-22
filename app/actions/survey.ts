import prisma from '@/lib/db'
export const getResults = async (id: string) => {
 const result = await prisma.surveyResults.findUnique({
  where: {
   id: id,
  },
 })
 return result
}

export const getAllResults = async () => {
 const result = await prisma.surveyResults.findMany()
 return result
}
