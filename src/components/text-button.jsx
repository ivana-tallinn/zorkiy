import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../const';
import { Color } from '../tokens/colors';
import { Icon } from './icon';

const TextButtonSize = {
  M: 'm',
  L: 'l'
};

const TextButtonColor = {
  CONTRAST: 'contrast',
  ALWAYS_GRAY: 'always-gray'
};

const TextButtonSizeToCSS = {
  [TextButtonSize.M]: css`
    font-size: 14px;
    line-height: 20px;
  `,
  [TextButtonSize.L]: css`
    font-size: 16px;
    line-height: 22px;
  `
};

const TextButtonColorToCSS = {
  [TextButtonColor.CONTRAST]: css`
    color: ${(props) => props.theme.current === Theme.LIGHT ? Color.GRAY_50 : Color.GRAY_10};

    svg {
      color: ${Color.BLUE_20};
    }
  `,
  [TextButtonColor.ALWAYS_GRAY]: css`
    color: ${Color.GRAY_30};

    svg {
      color: ${Color.GRAY_30};
    }
  `
};

const CSS = css`
  ${(props) => TextButtonSizeToCSS[props.size]}
  ${(props) => TextButtonColorToCSS[props.color]}

  display: inline-flex;
  align-items: center;

  transition: color 0.4s;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${Color.BLUE_10};
  }

  &:active {
    color: ${Color.BLUE_30};
  }

  &:disabled {
    color: ${Color.GRAY_20};

    cursor: not-allowed;
  }

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    svg {
      color: currentColor;
    }
  }
`;

const StyledTextButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
  size: props.size || TextButtonSize.M,
  color: props.color || TextButtonColor.CONTRAST
}))`${CSS}`;

const StyledTextLink = styled(Link).attrs((props) => ({
  size: props.size || TextButtonSize.M,
  color: props.color || TextButtonColor.CONTRAST
}))`${CSS}`;

const StyledTextButtonIconLeft = styled(Icon)`
  margin-right: 4px;
`;

export {
  TextButtonSize,
  TextButtonColor,
  StyledTextButton as TextButton,
  StyledTextLink as TextLink,
  StyledTextButtonIconLeft as TextButtonIconLeft
};
