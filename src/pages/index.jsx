import React from 'react';
import styled from 'styled-components';
import { visuallyHidden } from '../helpers/visually-hidden';
import { Container } from '../components/container';
import { Banner } from '../components/banner';
import { CategoryCard } from '../components/category-card';
import { ServiceCard } from '../components/service-card';
import { TypographyVariant, Typography } from '../components/typography';

import bannerImageLight from '../images/banner-light.jpg';
import bannerImageDark from '../images/banner-dark.jpg';
import categoryImage1 from '../images/category-1.svg';
import categoryImage2 from '../images/category-2.svg';
import categoryImage3 from '../images/category-3.svg';
import serviceImage1 from '../images/service-1.jpg';
import serviceImage2 from '../images/service-2.jpg';
import serviceImage3 from '../images/service-3.jpg';

const StyledIndexPage = styled.div`
  padding-bottom: 70px;
`;

const StyledPageTitle = styled.h1`${visuallyHidden}`;

const StyledSection = styled(Container).attrs({
  as: 'section'
})`
  margin-top: 50px;
`;

const StyledSectionTitle = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_2
})`
  margin-bottom: 28px;
`;

const StyledCardList = styled.ul`
  display: grid;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

function IndexPage() {
  return (
    <StyledIndexPage>
      <StyledPageTitle>
        Оптика Зоркий
      </StyledPageTitle>
      <Banner
        title='Бесплатная консультация окулиста'
        text='При покупке оправы Ray-Ban и Seiko от 15 000 рублей'
        link='#'
        imageLight={bannerImageLight}
        imageDark={bannerImageDark}
      />
      <StyledSection>
        <StyledSectionTitle>
          Категории товаров
        </StyledSectionTitle>
        <StyledCardList>
          <li>
            <CategoryCard
              title='Контактные линзы'
              link='#'
              image={categoryImage1}
            />
          </li>
          <li>
            <CategoryCard
              title='Оправы для очков'
              link='#'
              image={categoryImage2}
            />
          </li>
          <li>
            <CategoryCard
              title='Солнцезащитные очки'
              link='#'
              image={categoryImage3}
            />
          </li>
        </StyledCardList>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>
          Услуги
        </StyledSectionTitle>
        <StyledCardList>
          <li>
            <ServiceCard
              title='Проверка зрения'
              link='#'
              image={serviceImage1}
            />
          </li>
          <li>
            <ServiceCard
              title='Осмотр врачом'
              link='#'
              image={serviceImage2}
            />
          </li>
          <li>
            <ServiceCard
              title='Подбор линз'
              link='#'
              image={serviceImage3}
            />
          </li>
        </StyledCardList>
      </StyledSection>
    </StyledIndexPage>
  );
}

export { IndexPage };
