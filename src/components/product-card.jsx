import React from 'react';
import styled from 'styled-components';
import { Color } from '../tokens/colors';
import { BaseCard } from '../helpers/base-card';
import { visibleOnLightTheme } from '../helpers/visible-on-light-theme';
import { visibleOnDarkTheme } from '../helpers/visible-on-dark-theme';
import { TypographyVariant, Typography } from './typography';
import { Button } from './button';

const StyledProductCard = styled.article`
  position: relative;

  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: end;
  gap: 10px;
  width: 100%;
  padding: 10px;
  padding-top: 138px;

  @media (min-width: 768px) {
    padding-top: 108px;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 130px;

  object-fit: cover;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledImageLight = styled(StyledImage)`${visibleOnLightTheme}`;
const StyledImageDark = styled(StyledImage)`${visibleOnDarkTheme}`;

const StyledName = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_3
})`
  margin-bottom: 6px;
`;

const StyledPrice = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_1,
  color: Color.GRAY_30
})``;

function ProductCard(props) {
  return (
    <BaseCard className={props.className} to={props.link}>
      <StyledProductCard>
        <StyledImageLight src={props.imageLight} />
        <StyledImageDark src={props.imageDark} />
        <div>
          <StyledName>
            {props.name}
          </StyledName>
          <StyledPrice>
            {props.price} ₽
          </StyledPrice>
        </div>
        <Button>
          Купить
        </Button>
      </StyledProductCard>
    </BaseCard>
  );
}

export { ProductCard };
