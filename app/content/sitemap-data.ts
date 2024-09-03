const siteUrl = 'https://www.ink-monkey.com'
const decalsUrl = `${siteUrl}/list/Vinyl-Decal`
const windowUrl = `${siteUrl}/list/Truck-Back-Window-Graphics`
const creditUrl = `${siteUrl}/list/Credit-Card-Skin`

const categories = ['interests-hobbies', 'celebrations-1', 'identity', 'music-entertainment', 'art-design', 'identity']

const subcats = {
 'interests-hobbies': ['outdoors', 'wild-animals', 'sports-automotive', 'pets', 'cool-shit'],
 'celebrations-1': ['holidays-events', 'birthdays', 'weddings', 'graduations', 'congratulations'],
 'music-entertainment': ['music', 'entertainment', 'quotes-memes'],
 'art-design': ['brands-logos', 'geometric-patterns', 'fine-art', 'abstract-art'],
 identity: ['careers', 'spiritual', 'cultural', 'patriotic', 'military'],
}

const decalsCats = categories.map((category) => `${decalsUrl}/${category}`)
const windowCats = categories.map((category) => `${windowUrl}/${category}`)
const creditCats = categories.map((category) => `${creditUrl}/${category}`)

const decalsSubcats = Object.entries(subcats).flatMap(([category, subcats]) => {
 return subcats.map((subcat) => `${decalsUrl}/${category}/${subcat}`)
})

const windowSubcats = Object.entries(subcats).flatMap(([category, subcats]) => {
 return subcats.map((subcat) => `${windowUrl}/${category}/${subcat}`)
})

const creditSubcats = Object.entries(subcats).flatMap(([category, subcats]) => {
 return subcats.map((subcat) => `${creditUrl}/${category}/${subcat}`)
})

export const sitemapUrls = [...decalsCats, ...windowCats, ...creditCats, ...decalsSubcats, ...windowSubcats, ...creditSubcats]
