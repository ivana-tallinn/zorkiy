import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { visibleOnLightTheme } from '../helpers/visible-on-light-theme';
import { visibleOnDarkTheme } from '../helpers/visible-on-dark-theme';
import logoLight from '../images/logo-light.svg';
import logoDark from '../images/logo-dark.svg';

const StyledLogo = styled(Link)`
  position: relative;

  width: 86px;
  height: 29px;
`;

const StyledImage = styled.img.attrs({
  alt: 'Логотип оптики "Зоркий"'
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledImageLight = styled(StyledImage)`${visibleOnLightTheme}`;
const StyledImageDark = styled(StyledImage)`${visibleOnDarkTheme}`;

function Logo(props) {
  return (
    <StyledLogo className={props.className} to='/'>
      <StyledImageLight src={logoLight} />
      <StyledImageDark src={logoDark} />
    </StyledLogo>
  );
}

export { Logo };
