import React from 'react'
import { cn } from '../utils/cn'
import { smooch } from '../layout'

function Logo() {
 return <h2 className={cn('text-2xl text-accent mx-4', smooch.className)}>Ink Monkey</h2>
}

export default Logo
