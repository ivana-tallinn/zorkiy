import { css } from 'styled-components';
import { Theme } from '../const';

const visibleOnDarkTheme = css`
  opacity: ${(props) => props.theme.current === Theme.DARK ? 1 : 0};
  transition: opacity 0.4s;
`;

export { visibleOnDarkTheme };
