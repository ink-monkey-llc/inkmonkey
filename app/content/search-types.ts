export const searchTypes = [
 { id: 'all', label: 'All Types', queryHandle: 'All' },
 { id: 'dec', label: 'Stickers & Decals', queryHandle: 'Vinyl Decal' },
 { id: 'win', label: 'Truck Back Window Graphics', queryHandle: 'Truck Back Window Graphics' },
]

export type SearchType = {
 id: string
 label: string
 queryHandle: string
}
