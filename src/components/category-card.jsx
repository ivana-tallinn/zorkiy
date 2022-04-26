import React from 'react';
import styled from 'styled-components';
import { Color } from '../tokens/colors';
import { BaseCard } from '../helpers/base-card';
import { TypographyVariant, Typography } from './typography';

const StyledCategoryCard = styled.article`
  position: relative;

  width: 100%;
  height: 94px;

  background-image: url(${(props) => props.image});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 112px;
  }
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})`
  position: absolute;
  top: 6px;
  right: 60px;
  left: 6px;
`;

const StyledBaseCard = styled(BaseCard)`
  &:hover,
  &:focus {
    ${StyledTitle} {
      color: ${Color.BLUE_20};
    }
  }
`;

function CategoryCard(props) {
  return (
    <StyledBaseCard className={props.className} to={props.link}>
      <StyledCategoryCard image={props.image}>
        <StyledTitle>
          {props.title}
        </StyledTitle>
      </StyledCategoryCard>
    </StyledBaseCard>
  );
}

export { CategoryCard };
