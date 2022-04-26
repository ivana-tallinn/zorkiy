import React from 'react';
import styled, { css } from 'styled-components';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';

const IconSize = {
  M: 'm',
  L: 'l'
};

const IconNameToIconSize = {
  [IconName.ARROW_RIGHT]: IconSize.M,
  [IconName.CHECK]: IconSize.M,
  [IconName.CHEVRON_DOWN]: IconSize.M,
  [IconName.MENU]: IconSize.L,
  [IconName.TELEGRAM]: IconSize.M,
  [IconName.THEME_TOGGLE]: IconSize.M,
  [IconName.USER]: IconSize.M,
  [IconName.VK]: IconSize.M,
  [IconName.YOUTUBE]: IconSize.M
};

const IconSizeToCSS = {
  [IconSize.M]: css`
    width: 22px;
    height: 22px;
  `,
  [IconSize.L]: css`
    width: 36px;
    height: 36px;
  `
};

const StyledIcon = styled.svg.attrs((props) => ({
  color: props.color || Color.BLUE_20
}))`
  ${(props) => IconSizeToCSS[IconNameToIconSize[props.name]]}

  color: ${(props) => props.color};

  transition: color 0.4s;
`;

function Icon(props) {
  const xlinkHref = `#${props.name}`;

  return (
    <StyledIcon
      className={props.className}
      name={props.name}
      color={props.color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <use xlinkHref={xlinkHref} />
    </StyledIcon>
  );
}

export { Icon };
