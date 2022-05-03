import { useMemo } from 'react';
import { Theme } from '../theme';

const useMockProducts = (theme = Theme.LIGHT) => {
  const products = useMemo(() => [
    {
      id: 1,
      name: 'Оправа Seiko',
      price: 15000,
      image: theme === Theme.LIGHT ? '/images/products/product-1-light.jpg' : '/images/products/product-1-dark.jpg',
      imageAlt: 'Круглая чёрная оправа с серебристыми и золотистыми элементами',
      isHit: true,
      isNew: false,
      isNotAvailable: false
    },
    {
      id: 2,
      name: 'Оправа Max Mara',
      price: 20000,
      image: theme === Theme.LIGHT ? '/images/products/product-2-light.jpg' : '/images/products/product-2-dark.jpg',
      imageAlt: 'Чёрная оправа с золотистыми элементами формы «кошачий глаз»',
      isHit: true,
      isNew: true,
      isNotAvailable: false
    },
    {
      id: 3,
      name: 'Оправа Fossil',
      price: 18000,
      image: theme === Theme.LIGHT ? '/images/products/product-3-light.jpg' : '/images/products/product-3-dark.jpg',
      imageAlt: 'Прямоугольная чёрная оправа с жёлтыми элементами',
      isHit: false,
      isNew: true,
      isNotAvailable: false
    },
    {
      id: 4,
      name: 'Оправа Ray-Ban',
      price: 24000,
      image: theme === Theme.LIGHT ? '/images/products/product-4-light.jpg' : '/images/products/product-4-dark.jpg',
      imageAlt: 'Полуободковая чёрная оправа',
      isHit: false,
      isNew: false,
      isNotAvailable: true
    },
    {
      id: 5,
      name: 'Оправа Rolph',
      price: 20000,
      image: theme === Theme.LIGHT ? '/images/products/product-5-light.jpg' : '/images/products/product-5-dark.jpg',
      imageAlt: 'Чёрная оправа с бордовыми элементами формы «трапеция»',
      isHit: true,
      isNew: false,
      isNotAvailable: false
    },
    {
      id: 6,
      name: 'Оправа Gucci',
      price: 38000,
      image: theme === Theme.LIGHT ? '/images/products/product-6-light.jpg' : '/images/products/product-6-dark.jpg',
      imageAlt: 'Бордовая оправа формы «кошачий глаз»',
      isHit: false,
      isNew: true,
      isNotAvailable: true
    }
  ], [theme]);

  return products;
};

export { useMockProducts };
