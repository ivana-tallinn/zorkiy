import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Container } from './container';
import { Logo } from '../elements/logo';
import { Icon } from '../elements/icon';
import { IconButtonColor, IconButton } from '../elements/icon-button';
import { TextButtonColor, TextButton, TextLink } from '../elements/text-button';
import { Typography, TypographyVariant } from '../elements/typography';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.current === Theme.LIGHT ? Color.GRAY_10 : Color.GRAY_60};
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

const StyledLinkNative = styled(TextButton).attrs({
  as: 'a',
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

function Footer({ className }) {
  const theme = useTheme();
  const themeToggleLabel = theme.current === Theme.LIGHT ? '???????????????? ???????????? ????????' : '???????????????? ?????????????? ????????';
  const onThemeToggleClick = () => theme.toggleTheme();

  return (
    <StyledFooter className={className}>
      <StyledContainer>

        <StyledLogoAndSocialMedia>
          <Logo />
          <StyledSocialMediaList>
            <StyledSocialMediaItem>
              <StyledSocialMediaLink
                href='#'
                aria-label='???????????? ???????????????? ?? Telegram'
              >
                <Icon name={IconName.TELEGRAM} />
              </StyledSocialMediaLink>
            </StyledSocialMediaItem>
            <StyledSocialMediaItem>
              <StyledSocialMediaLink
                href='#'
                aria-label='???????????? ???????????????? ???? YouTube'
              >
                <Icon name={IconName.YOUTUBE} />
              </StyledSocialMediaLink>
            </StyledSocialMediaItem>
            <StyledSocialMediaItem>
              <StyledSocialMediaLink
                href='#'
                aria-label='???????????? ???????????????? ???? ??????????????????'
              >
                <Icon name={IconName.VK} />
              </StyledSocialMediaLink>
            </StyledSocialMediaItem>
          </StyledSocialMediaList>
        </StyledLogoAndSocialMedia>

        <StyledLinkGroups>
          <li>
            <StyledLinkGroupTitle>
              ????????????????
            </StyledLinkGroupTitle>
            <StyledLinkList>
              <li>
                <StyledLinkNative href='mailto:hello@zorkiy.ru'>
                  hello@zorkiy.ru
                </StyledLinkNative>
              </li>
              <li>
                <StyledLinkNative href='tel:+79999999999'>
                  +7 999 999 99 99
                </StyledLinkNative>
              </li>
              <li>
                <StyledLinkNative href='https://yandex.ru/maps/-/CCUFJMdF8D' target='_blank'>
                  ??. ??????????-??????????????????, ??????. ???????? ????????????????, 5 ???????????? ??
                </StyledLinkNative>
              </li>
            </StyledLinkList>
          </li>
          <li>
            <StyledLinkGroupTitle>
              ??????????????
            </StyledLinkGroupTitle>
            <StyledLinkList>
              <li>
                <StyledLink to='#'>
                  ???????????????????? ??????????
                </StyledLink>
              </li>
              <li>
                <StyledLink to='/catalog'>
                  ???????????? ?????? ??????????
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  ???????????????????????????? ????????
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  ????????????????????
                </StyledLink>
              </li>
            </StyledLinkList>
          </li>
          <li>
            <StyledLinkGroupTitle>
              ????????????
            </StyledLinkGroupTitle>
            <StyledLinkList>
              <li>
                <StyledLink to='#'>
                  ???????????? ????????????????
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  ?????????????????????? ????????????
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  ???????????? ????????
                </StyledLink>
              </li>
              <li>
                <StyledLink to='#'>
                  ??????????????????????????????
                </StyledLink>
              </li>
            </StyledLinkList>
          </li>
        </StyledLinkGroups>

        <StyledThemeToggle
          aria-label={themeToggleLabel}
          onClick={onThemeToggleClick}
        >
          <Icon name={IconName.THEME_TOGGLE} />
        </StyledThemeToggle>

      </StyledContainer>
    </StyledFooter>
  );
}

export { Footer };
