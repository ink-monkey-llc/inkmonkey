export const sortOptions = [
 { id: 'az', label: 'A-Z', value: 'TITLE', reverse: false },
 { id: 'za', label: 'Z-A', value: 'TITLE', reverse: true },
 { id: 'new', label: 'Newest', value: 'CREATED', reverse: true },
 { id: 'old', label: 'Oldest', value: 'CREATED', reverse: false },
] as const

export type SortOption = {
 id: string
 label: string
 value: string
 reverse: boolean
}
