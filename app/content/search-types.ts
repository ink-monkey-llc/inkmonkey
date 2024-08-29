export const searchTypes = [
 { id: 'all', label: 'All Types', queryHandle: 'All' },
 { id: 'dec', label: 'Stickers & Decals', queryHandle: 'Vinyl Decal' },
 { id: 'win', label: 'Truck Back Window Graphics', queryHandle: 'Truck Back Window Graphics' },
 { id: 'cc', label: 'Credit Card Skins', queryHandle: 'Credit Card Skin' },
]

export type SearchType = {
 id: string
 label: string
 queryHandle: string
}
