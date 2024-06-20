import React from 'react'
import type { MenuItem } from '@/lib/shopify/types'
import Link from 'next/link'

type Props = {
 obj: MenuItem
}

function MenuLink({ obj }: Props) {
 return <Link href='/'>{obj.title}</Link>
}

export default MenuLink
