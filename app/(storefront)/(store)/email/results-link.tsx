import { Html, Button, Tailwind } from '@react-email/components'

const Email = ({ id }: { id: string }) => {
 return (
  <Html
   lang='en'
   dir='ltr'>
   <Tailwind>
    <Button
     className='bg-blue-800 text-white p-2 rounded-md flex items-center justify-center w-max'
     href={`https://inkmonkey.vercel.app/reader/${id}`}>
     View Survey Results
    </Button>
   </Tailwind>
  </Html>
 )
}

export default Email
