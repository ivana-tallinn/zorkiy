import React from 'react';
import styled from 'styled-components';
import { Theme } from '../const';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { BaseCard } from '../helpers/base-card';
import { TypographyVariant, Typography } from './typography';
import { Icon } from './icon';

const StyledServiceCard = styled.article`
  position: relative;

  width: 100%;
  height: 94px;

  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;

  @media (min-width: 768px) {
    height: 112px;
  }
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_3
})`
  position: absolute;
  bottom: 6px;
  left: 6px;

  display: flex;
  align-items: center;
  padding: 2px;

  background-color: ${(props) => props.theme.current === Theme.LIGHT ? Color.WHITE : Color.GRAY_50};
  transition: color 0.4s, background-color 0.4s;
`;

const StyledArrow = styled(Icon).attrs({
  name: IconName.ARROW_RIGHT
})`
  margin-left: 2px;
`;

const StyledBaseCard = styled(BaseCard)`
  &:hover,
  &:focus {
    ${StyledTitle} {
      color: ${Color.BLUE_20};
    }
  }
`;

function ServiceCard(props) {
  return (
    <StyledBaseCard to={props.link}>
      <StyledServiceCard image={props.image}>
        <StyledTitle>
          {props.title}
          <StyledArrow />
        </StyledTitle>
      </StyledServiceCard>
    </StyledBaseCard>
  );
}

export { ServiceCard };
