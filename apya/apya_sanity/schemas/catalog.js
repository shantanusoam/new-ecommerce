import { GoFileSubmodule } from 'react-icons/go';

export default {
  name: 'catalog',
  title: 'Catalog',
  description: '',
  type: 'document',
  icon: GoFileSubmodule,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Image URL',
      name: 'imageUrl',
      type: 'url',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'Desc',
      title: 'Description',
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
