import '@/app/globals.css'

export const metadata = {
 title: 'The Calendar by Ink Monkey',
 description: 'A Calendar app that integrates with your Google Calendar',
}

export default function CalLayout({ children }: { children: React.ReactNode }) {
 return <div className='overflow-x-hidden '>{children}</div>
}
