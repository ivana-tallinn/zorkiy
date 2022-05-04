import { useMemo } from 'react';
import { Theme } from '../theme';

const useMockBanner = (theme = Theme.LIGHT) => {
  const banner = useMemo(() => ({
    title: 'Бесплатная консультация окулиста',
    text: 'При покупке оправы Ray-Ban и Seiko от 15 000 рублей',
    image: theme === Theme.LIGHT ? '/images/banner/banner-light.jpg' : '/images/banner/banner-dark.jpg'
  }), [theme]);

  return banner;
};

export { useMockBanner };
