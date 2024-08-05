export async function POST(request: Request) {
 const body = await request.json()
 //  console.log('body:', body)
 const res = await fetch('https://localhost:8888/save', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify({ time: new Date().toISOString() }),
 })

 const data = await res.json()

 return Response.json(data)
}
