import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Color } from '../tokens/colors';

const ButtonSize = {
  M: 'm',
  L: 'l'
};

const ButtonSizeToCSS = {
  [ButtonSize.M]: css`
    padding: 5px 8px;

    font-size: 14px;
    line-height: 20px;
  `,
  [ButtonSize.L]: css`
    padding: 8px 14px;

    font-size: 16px;
    line-height: 22px;
  `
};

const CSS = css`
  ${(props) => ButtonSizeToCSS[props.size]}

  color: ${Color.WHITE};

  background-color: ${Color.BLUE_20};
  transition: background-color 0.4s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${Color.BLUE_10};
  }

  &:active {
    background-color: ${Color.BLUE_30};
  }

  &:disabled {
    background-color: ${Color.GRAY_20};
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
  size: props.size || ButtonSize.M
}))`${CSS}`;

const StyledLink = styled(Link).attrs((props) => ({
  size: props.size || ButtonSize.M
}))`${CSS}`;

export {
  ButtonSize,
  StyledButton as Button,
  StyledLink as Link
};
