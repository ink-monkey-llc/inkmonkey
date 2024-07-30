export type Params = {
 slug: string[]
}

export default function ProductLayout({
 children,
 params,
}: Readonly<{
 params: Params
 children: React.ReactNode
}>) {
 return <div className='flex w-full h-full'>{children}</div>
}
