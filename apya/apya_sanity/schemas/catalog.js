import { GoFileSubmodule } from 'react-icons/go';

export default {
  name: 'catalog',
  title: 'Catalog',
  description: '',
  type: 'document',
  icon: GoFileSubmodule,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: {
            type: 'product',
          },
        },
      ],
    },
  ],
};
