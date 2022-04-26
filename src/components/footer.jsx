import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../const';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Container } from './container';
import { Logo } from './logo';
import { Icon } from './icon';
import { IconButtonColor, IconButton } from './icon-button';
import { TextButtonColor, TextLink } from './text-button';
import { Typography, TypographyVariant } from './typography';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.current === Theme.LIGHT ? Color.GRAY_10 : Color.GRAY_60};
  transition: background-color 0.4s;
`;

const StyledContainer = styled(Container)`
  position: relative;

  display: grid;
  gap: 28px;
  padding-top: 50px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    grid-template-columns: max-content 1fr;
    align-items: start;
    gap: 74px;
  }
`;

const StyledLogoAndSocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const StyledSocialMediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

const StyledSocialMediaItem = styled.li`
  display: grid;
`;

const StyledSocialMediaLink = styled(IconButton).attrs({
  as: 'a',
  color: IconButtonColor.ALWAYS_GRAY
})``;

const StyledLinkGroups = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

const StyledLinkGroupTitle = styled(Typography).attrs({
  variant: TypographyVariant.TITLE_3
})`
  margin-bottom: 12px;
`;

const StyledLinkList = styled.ul`
  display: grid;
  gap: 6px;
`;

const StyledLink = styled(TextLink).attrs({
  color: TextButtonColor.ALWAYS_GRAY
})``;

const StyledThemeToggle = styled(IconButton).attrs({
  color: IconButtonColor.ALWAYS_GRAY
})`
  position: absolute;
  bottom: 30px;
  left: 14px;

  @media (min-width: 768px) {
    bottom: 46px;
    left: 46px;
  }
`;

function Footer(props) {
  const { toggleTheme } = useTheme();

  const onThemeToggleClick = () => toggleTheme();

  return (
    <StyledFooter className={props.className}>
      <StyledContainer>

        <StyledLogoAndSocialMedia>
          <Logo />
          <StyledSocialMediaList>
            <StyledSocialMediaItem>
              <StyledSocialMediaLink href='#'>
                <Icon name={IconName.TELEGRAM} />
              </StyledSocialMediaLink>
            </StyledSocialMediaItem>
            <StyledSocialMediaItem>
              <StyledSocialMediaLink href='#'>
                <Icon name={IconName.YOUTUBE} />
              </StyledSocialMediaLink>
            </StyledSocialMediaItem>
            <StyledSocialMediaItem>
              <StyledSocialMediaLink href='#'>
                <Icon name={IconName.VK} />
              </StyledSocialMediaLink>
            </StyledSocialMediaItem>
          </StyledSocialMediaList>
        </StyledLogoAndSocialMedia>

        <StyledLinkGroups>
          <li>
            <StyledLinkGroupTitle>
              Контакты
            </StyledLinkGroupTitle>
            <StyledLinkList>
              <li>
                <StyledLink to='#'>
                  hello@zorkiy.ru
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  +7 999 999 99 99
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  г. Санкт-Петербург, наб. Pеки Карповки, 5 корпус П
                </StyledLink>
              </li>
            </StyledLinkList>
          </li>
          <li>
            <StyledLinkGroupTitle>
              Каталог
            </StyledLinkGroupTitle>
            <StyledLinkList>
              <li>
                <StyledLink to='#'>
                  Контактные линзы
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  Оправы для очков
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  Солнцезащитные очки
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  Аксессуары
                </StyledLink>
              </li>
            </StyledLinkList>
          </li>
          <li>
            <StyledLinkGroupTitle>
              Услуги
            </StyledLinkGroupTitle>
            <StyledLinkList>
              <li>
                <StyledLink to='#'>
                  Осмотр окулиста
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  Диагностика зрения
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  Подбор линз
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  Ортокератология
                </StyledLink>
              </li>
            </StyledLinkList>
          </li>
        </StyledLinkGroups>

        <StyledThemeToggle onClick={onThemeToggleClick}>
          <Icon name={IconName.THEME_TOGGLE} />
        </StyledThemeToggle>

      </StyledContainer>
    </StyledFooter>
  );
}

export { Footer };
