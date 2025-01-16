export const productTypes = [
 { id: 'dec', label: 'Stickers & Decals', queryHandle: 'Vinyl Decal', url: '/list/Vinyl-Decal' },
 { id: 'win', label: 'Truck Back Window Graphics', queryHandle: 'Truck Back Window Graphics', url: '/list/Truck-Back-Window-Graphics' },
 { id: 'card', label: 'Credit Card Skins', queryHandle: 'Card Skin', url: '/list/Credit-Card-Skin' },
 { id: 'eye', label: 'Truck Windshield Eyebrows', queryHandle: 'Truck Windshield Eyebrows', url: '/product/truck-windshield-eyebrow' },
 { id: 'upload', label: 'Upload Custom Design', queryHandle: 'Custom Upload', url: '/upload' },
 //  { id: 'cyb', label: 'Cybertruck Wraps', queryHandle: 'Cybertruck Wrap', url: '/list/Cybertruck-Wrap' },
]

export type ProductType = {
 id: string
 label: string
 queryHandle: string
 url: string
}
