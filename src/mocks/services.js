import { useMemo } from 'react';

const useMockServices = () => {
  const services = useMemo(() => [
    {
      id: 1,
      title: 'Проверка зрения',
      image: '/images/services/service-1.jpg'
    },
    {
      id: 2,
      title: 'Осмотр врачом',
      image: '/images/services/service-2.jpg'
    },
    {
      id: 3,
      title: 'Подбор линз',
      image: '/images/services/service-3.jpg'
    }
  ], []);

  return services;
};

export { useMockServices };
