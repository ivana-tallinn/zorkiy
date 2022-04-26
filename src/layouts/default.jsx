import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../const';
import { Color } from '../tokens/colors';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const ThemeToCSS = {
  [Theme.LIGHT]: css`
    background-color: ${Color.WHITE};
  `,
  [Theme.DARK]: css`
    background-color: ${Color.GRAY_50};
  `
};

const StyledDefaultLayout = styled.div`
  ${(props) => ThemeToCSS[props.theme.current]}

  display: grid;
  grid-template-rows: max-content 1fr max-content;
  min-height: 100vh;

  transition: background-color 0.4s;
`;

function DefaultLayout() {
  return (
    <StyledDefaultLayout>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </StyledDefaultLayout>
  );
}

export { DefaultLayout };
