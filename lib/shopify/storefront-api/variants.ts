import { client, API_VERSION } from './store-api'
import { variantByOptionsQuery } from '../queries/products'
import { SelectedOptionInput } from '../types'

const variantApi = {
 getVariantByOptions: async (args: { handle: string; selectedOptions: SelectedOptionInput[] }) => {
  const { data, errors, extensions } = await client.request(variantByOptionsQuery, {
   variables: {
    handle: args.handle,
    selectedOptions: args.selectedOptions,
   },
   apiVersion: API_VERSION,
  })
  if (errors) {
   console.log('errors:', errors)
   throw new Error(errors.message)
  }
  // console.log('data:', await data)
  return await data.product.variantBySelectedOptions
 },
}

export default variantApi
