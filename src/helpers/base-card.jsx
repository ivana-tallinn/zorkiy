import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../const';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadows';

const StyledBaseCard = styled(Link)`
  display: flex;

  ${(props) => props.theme.current === Theme.LIGHT ? css`
    background-color: ${Color.WHITE};
    box-shadow: ${Shadow.CARD};
  ` : css`
    background-color: ${Color.GRAY_40};
  `}

  transition: background-color 0.4s, box-shadow 0.4s;

  &:hover,
  &:focus {
    box-shadow: ${Shadow.CARD_HOVER_FOCUS};
  }
`;

export {
  StyledBaseCard as BaseCard
};
