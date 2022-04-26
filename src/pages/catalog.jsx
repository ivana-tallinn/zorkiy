import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/container';
import { ProductCard } from '../components/product-card';
import { TypographyVariant, Typography } from '../components/typography';
import { Button } from '../components/button';

import productImage1Light from '../images/product-1-light.jpg';
import productImage2Light from '../images/product-2-light.jpg';
import productImage3Light from '../images/product-3-light.jpg';
import productImage4Light from '../images/product-4-light.jpg';
import productImage5Light from '../images/product-5-light.jpg';
import productImage6Light from '../images/product-6-light.jpg';
import productImage1Dark from '../images/product-1-dark.jpg';
import productImage2Dark from '../images/product-2-dark.jpg';
import productImage3Dark from '../images/product-3-dark.jpg';
import productImage4Dark from '../images/product-4-dark.jpg';
import productImage5Dark from '../images/product-5-dark.jpg';
import productImage6Dark from '../images/product-6-dark.jpg';

const StyledCatalogPage = styled.div`
  padding-top: 40px;
  padding-bottom: 70px;
`;

const StyledPageTitle = styled(Typography).attrs({
  as: 'h1',
  variant: TypographyVariant.TITLE_1
})`
  margin-bottom: 40px;
`;

const StyledProductList = styled.ol`
  display: grid;
  gap: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

const StyledShowMoreButton = styled(Button)`
  display: block;
  margin-right: auto;
  margin-left: auto;
`;

function CatalogPage() {
  return (
    <StyledCatalogPage>
      <Container>
        {/* Пока тут нет хлебных крошек - это нормально */}
        <StyledPageTitle>
          Каталог товаров
        </StyledPageTitle>
        {/* Пока тут нет фильтров - это нормально */}
        <StyledProductList>
          <li>
            <ProductCard
              name='Оправа Seiko'
              price={15000}
              link="#"
              imageLight={productImage1Light}
              imageDark={productImage1Dark}
            />
          </li>
          <li>
            <ProductCard
              name='Оправа Max Mara'
              price={20000}
              link="#"
              imageLight={productImage2Light}
              imageDark={productImage2Dark}
            />
          </li>
          <li>
            <ProductCard
              name='Оправа Fossil'
              price={18000}
              link="#"
              imageLight={productImage3Light}
              imageDark={productImage3Dark}
            />
          </li>
          <li>
            <ProductCard
              name='Оправа Ray-Ban'
              price={24000}
              link="#"
              imageLight={productImage4Light}
              imageDark={productImage4Dark}
            />
          </li>
          <li>
            <ProductCard
              name='Оправа Rolph'
              price={20000}
              link="#"
              imageLight={productImage5Light}
              imageDark={productImage5Dark}
            />
          </li>
          <li>
            <ProductCard
              name='Оправа Gucci'
              price={38000}
              link="#"
              imageLight={productImage6Light}
              imageDark={productImage6Dark}
            />
          </li>
        </StyledProductList>
        <StyledShowMoreButton>
          Показать ещё
        </StyledShowMoreButton>
      </Container>
    </StyledCatalogPage>
  );
}

export { CatalogPage };
