import { smooch } from '@/lib/fonts'
import React from 'react'
import { cn } from '../../utils/cn'

function ReturnPolicy() {
 return (
  <div className='w-full min-h-[var(--view-height)] justify-center text-center py-12 flex flex-col'>
   <h1 className={cn('text-6xl text-accent mb-8', smooch.className)}>Return Policy</h1>
   <div className='text-start flex flex-col gap-4 max-w-[600px] m-auto'>
    <p className='text-lg'>Ink Monkey has a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p>
    <p>
     To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.
     You’ll also need the receipt or proof of purchase.
     <p></p>
     To start a return, you can contact us at{' '}
     <a
      className='text-accent-bright underline'
      href='mailto:inkmonkeyllc@gmail.com'>
      inkmonkeyllc@gmail.com
     </a>
    </p>
    <p>Please note that returns will need to be sent to the following address:</p>
    <p className='text-accent font-semibold px-4'>
     Ink Monkey LLC <br />
     5601 S. Campbell Ave. Suite 106 <br />
     Springfield, MO 65810
    </p>
    <p>
     If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us
     without first requesting a return will not be accepted.
    </p>
    <p>
     You can always contact us for any return question at{' '}
     <a
      className='text-accent-bright underline'
      href='mailto:inkmonkeyllc@gmail.com'>
      inkmonkeyllc@gmail.com
     </a>
     .
    </p>
    <ul className='list-disc pl-4 space-y-4'>
     <li>
      <p className='font-semibold'>Damages and issues</p>
      <p>
       Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can
       evaluate the issue and make it right.
      </p>
     </li>
     <li>
      <p className='font-semibold'>Exchanges</p>
      <p>
       The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new
       item.
      </p>
     </li>
     <li>
      <p className='font-semibold'>Refunds</p>
      <p>
       We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be
       automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card
       company to process and post the refund too.
      </p>
     </li>
    </ul>
    <p className='text-accent'>If more than 15 business days have passed since we’ve approved your return, please contact us at inkmonkeyllc@gmail.com.</p>
   </div>
  </div>
 )
}

export default ReturnPolicy
