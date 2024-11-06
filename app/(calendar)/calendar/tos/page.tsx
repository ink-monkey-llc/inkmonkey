import React from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { Days_One, Figtree } from 'next/font/google'
import Image from 'next/image'

const daysOne = Days_One({ subsets: ['latin'], weight: '400' })
const figtree = Figtree({ subsets: ['latin'] })

function TOS() {
 return (
  <div
   style={{ scrollbarWidth: 'thin', scrollbarColor: '#2b2b2b transparent' }}
   className='p-8 w-[100vw] bg-var-bg '>
   <div className='flex gap-2'>
    <Image
     src={'/cal/icon_192.png'}
     width={50}
     height={50}
     alt='icon'
    />
    <div className={cn(daysOne.className)}>
     <h1 className='text-2xl'>The Calendar</h1>
     <p className='text-xs'>by Ink Monkey</p>
    </div>
   </div>
   <div className='w-full tablet:w-max mx-auto'>
    <Link
     href='/calendar'
     className='-mt-8 bg-var-home-btn rounded-xl py-3 px-6 w-max font-bold text-xl opacity-80 hover:opacity-100 cursor-pointer flex items-center ml-auto'>
     Back
    </Link>
    <div className={cn(figtree.className, 'mt-2 border border-var-home-border rounded-xl w-full sm:w-max flex flex-col gap-2 mx-auto')}>
     <div className='p-4'>
      <h2 className='font-semibold text-xl'>Terms of Service</h2>
      <p className='text-sm'>Effective Date: November 5th 2024</p>
     </div>
     <div className='max-w-[700px] flex flex-col gap-2 m-auto'>
      <p className='bg-var-bg-sec px-4'>
       {`These Terms of Service ("Terms") govern your use of our app. By accessing or using the app, you agree to these Terms. Please read them carefully.`}
      </p>
      <div className='flex flex-col gap-4 p-4'>
       <div className='flex flex-col gap-2'>
        <p className='font-semibold text-lg'>1. Service Overview</p>
        <p className='col-span-11 '>
         Our app allows users to sign in with their Google account to access and manage their Google Calendar events, alongside viewing relevant weather
         information.
        </p>
       </div>
       <div className='flex flex-col gap-2'>
        <p className='font-semibold text-lg'>2. User Data and Privacy</p>
        <p className='col-span-11 '>
         {`The app uses Google OAuth for authentication, allowing you to view, create, edit, and delete events in your Google Calendar. No user data is stored outside your active session. Calendar data is temporarily stored in your browser's memory and is deleted when you close the app.`}
         <a
          className='underline text-blue-300'
          href='/calendar/privacy'>
          {' '}
          For more information, please refer to our Privacy Policy.
         </a>
        </p>
       </div>
       <div className='flex flex-col gap-2'>
        <p className='font-semibold text-lg'>3. Permitted Use</p>
        <p className='col-span-11 '>
         You agree to use the app only for its intended purpose of viewing and managing your Google Calendar events with integrated weather information.
         Unauthorized or malicious use of the app is strictly prohibited.
        </p>
       </div>
       <div className='flex flex-col gap-2'>
        <p className='font-semibold text-lg'>4. No Warranty</p>
        <p className='col-span-11 '>
         {`The app is provided "as is," without warranties of any kind. We do not guarantee that the app will be error-free, uninterrupted, or secure.`}
        </p>
       </div>
       <div className='flex flex-col gap-2'>
        <p className='font-semibold text-lg'>5. Limitation of Liability</p>
        <p className='col-span-11 '>
         To the fullest extent permitted by law, we are not liable for any damages arising from your use or inability to use the app, including but not limited
         to data loss or service interruptions.
        </p>
       </div>
       <div className='flex flex-col gap-2'>
        <p className='font-semibold text-lg'>6. Changes to the Terms</p>
        <p className='col-span-11 '>{`We may update these Terms from time to time. If changes are made, the "Effective Date" will be updated. Your continued use of the app after such updates constitutes acceptance of the new Terms.`}</p>
       </div>
       <div className='flex flex-col gap-2'>
        <p className='font-semibold text-lg'>7. Contact Us</p>
        <p className='col-span-11 '>If you have any questions about this Privacy Policy, please contact us at inkmonkeyllc@gmail.com.</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default TOS
