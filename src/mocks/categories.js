import { useMemo } from 'react';

const useMockCategories = () => {
  const categories = useMemo(() => [
    {
      id: 1,
      title: 'Контактные линзы',
      image: '/images/categories/category-1.svg'
    },
    {
      id: 2,
      title: 'Оправы для очков',
      image: '/images/categories/category-2.svg'
    },
    {
      id: 3,
      title: 'Солнечные очки',
      image: '/images/categories/category-3.svg'
    }
  ], []);

  return categories;
};

export { useMockCategories };
