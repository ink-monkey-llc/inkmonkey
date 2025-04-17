import { client, API_VERSION } from './store-api';
import { variantByIdQuery, variantByOptionsQuery } from '../queries/products';
import { SelectedOptionInput } from '../types';

const variantApi = {
  getVariantByOptions: async (args: {
    handle: string;
    selectedOptions: SelectedOptionInput[];
  }) => {
    const { data, errors, extensions } = await client.request(
      variantByOptionsQuery,
      {
        variables: {
          handle: args.handle,
          selectedOptions: args.selectedOptions,
        },
        apiVersion: API_VERSION,
      }
    );
    if (errors) {
      console.log('errors:', errors);
      throw new Error(errors.message);
    }
    return await data.product.variantBySelectedOptions;
  },
  getVariantById: async (id: string) => {
    const { data, errors, extensions } = await client.request(
      variantByIdQuery,
      {
        variables: {
          id: id,
        },
        apiVersion: '2024-07',
      }
    );

    if (errors) {
      console.log('errors:', errors);
      throw new Error(errors.message);
    }
    return await data.node;
  },
};

export default variantApi;
