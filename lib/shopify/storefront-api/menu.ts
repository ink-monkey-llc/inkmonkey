import { revalidatePath } from 'next/cache'
import { client, API_VERSION } from './store-api'
import { menuQuery } from '../queries/menu'
import { ShopifyMenu } from '../types'

const menuApi = {
    getMenu: async (args: { handle: string }) => {
        revalidatePath('/')
        const { data, errors, extensions } = await client.request(menuQuery, {
            variables: {
                handle: args.handle,
            },
            apiVersion: API_VERSION,
        })
        if (errors) {
            console.log('errors:', errors)
            throw new Error(errors.message)
        }
        const menuData = (await data.menu) as ShopifyMenu
        return menuData
    },
}

export default menuApi
