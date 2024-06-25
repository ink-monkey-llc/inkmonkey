export const sortOptions = [
 { id: 'az', label: 'A-Z', value: 'TITLE', reverse: false },
 { id: 'za', label: 'Z-A', value: 'TITLE', reverse: true },
 { id: 'new', label: 'Newest', value: 'CREATED', reverse: false },
 { id: 'old', label: 'Oldest', value: 'CREATED', reverse: true },
] as const

export type SortOption = {
 id: string
 label: string
 value: string
 reverse: boolean
}
