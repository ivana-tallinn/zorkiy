import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../const';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';
import { IconName } from '../tokens/icons';
import { Container } from './container';
import { Logo } from './logo';
import { Icon } from './icon';
import { IconButton } from './icon-button';
import { TextButtonSize, TextLink, TextButtonIconLeft } from './text-button';

const StyledHeader = styled.header`
  ${(props) => props.theme.current === Theme.LIGHT ? css`
    background-color: ${Color.WHITE};
    box-shadow: ${Shadow.HEADER};
  ` : css`
    background-color: ${Color.GRAY_60};
  `}

  transition: background-color 0.4s box-shadow 0.4s;
`;

const StyledNavigation = styled(Container).attrs({
  as: 'nav'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  @media (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const StyledLogo = styled(Logo)`
  flex-shrink: 0;
`;

const StyledMenuButton = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledLinkList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledLinkItem = styled.li`
  margin-right: 16px;
  margin-left: 16px;
`;

const StyledLink = styled(TextLink).attrs({
  size: TextButtonSize.L
})``;

const StyledProfileLink = styled(StyledLink)`
  display: none;

  @media (min-width: 768px) {
    display: inline-flex;
    flex-shrink: 0;
  }
`;

function Header(props) {
  return (
    <StyledHeader className={props.className}>
      <StyledNavigation>

        <StyledLogo />

        <StyledMenuButton>
          <Icon name={IconName.MENU} />
        </StyledMenuButton>

        <StyledLinkList>
          <StyledLinkItem>
            <StyledLink to='/catalog'>Товары</StyledLink>
          </StyledLinkItem>
          <StyledLinkItem>
            <StyledLink to='#'>Услуги</StyledLink>
          </StyledLinkItem>
          <StyledLinkItem>
            <StyledLink to='#'>Каталог</StyledLink>
          </StyledLinkItem>
        </StyledLinkList>

        <StyledProfileLink to='#'>
          <TextButtonIconLeft name={IconName.USER} />
          Профиль
        </StyledProfileLink>

      </StyledNavigation>
    </StyledHeader>
  );
}

export { Header };
