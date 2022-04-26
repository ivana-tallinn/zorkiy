import React from 'react';
import styled from 'styled-components';
import { Theme } from '../const';
import { Color } from '../tokens/colors';
import { Gradient } from '../tokens/gradients';
import { visibleOnLightTheme } from '../helpers/visible-on-light-theme';
import { visibleOnDarkTheme } from '../helpers/visible-on-dark-theme';
import { Container } from './container';
import { TypographyVariant, Typography } from './typography';
import { ButtonSize, Link } from './button';

const StyledBanner = styled(Container).attrs({
  as: 'article'
})`
  position: relative;
`;

const StyledImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const StyledImageLight = styled(StyledImage)`${visibleOnLightTheme}`;
const StyledImageDark = styled(StyledImage)`${visibleOnDarkTheme}`;

const StyledContentOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: 320px;
`;

const StyledContentOverlayLight = styled(StyledContentOverlay)`
  ${visibleOnLightTheme}

  background-image: ${Gradient.BANNER_LIGHT};
`;

const StyledContentOverlayDark = styled(StyledContentOverlay)`
  ${visibleOnDarkTheme}

  background-image: ${Gradient.BANNER_DARK};
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 1;

  width: 280px;
  padding-top: 54px;
  padding-bottom: 54px;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_1,
  color: Color.BLUE_20
})`
  margin-bottom: 18px;
`;

const StyledText = styled(Typography).attrs((props) => ({
  variant: TypographyVariant.TEXT_1,
  color: props.theme.current === Theme.LIGHT ? Color.GRAY_40 : Color.GRAY_20
}))`
  margin-bottom: 30px;
`;

const StyledLink = styled(Link).attrs({
  size: ButtonSize.L
})``;

function Banner(props) {
  return (
    <StyledBanner>
      <StyledImageLight image={props.imageLight} />
      <StyledImageDark image={props.imageDark} />
      <StyledContentOverlayLight />
      <StyledContentOverlayDark />
      <StyledContent>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledText>{props.text}</StyledText>
        <StyledLink to={props.link}>
          Подробнее
        </StyledLink>
      </StyledContent>
    </StyledBanner>
  );
}

export { Banner };
