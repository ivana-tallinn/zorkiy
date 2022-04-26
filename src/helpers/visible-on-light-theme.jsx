import { css } from 'styled-components';
import { Theme } from '../const';

const visibleOnLightTheme = css`
  opacity: ${(props) => props.theme.current === Theme.LIGHT ? 1 : 0};
  transition: opacity 0.4s;
`;

export { visibleOnLightTheme };
