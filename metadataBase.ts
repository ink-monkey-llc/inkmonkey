const prod = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

let metaBase = 'http://localhost:3000/'

if (prod) {
 metaBase = `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
}

export default metaBase
