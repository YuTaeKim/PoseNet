import React from 'react';
import Head from 'next/head';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import ScrollToTop from 'components/ScrollToTop';
import theme from 'layout/theme';

import GlobalStyle from 'layout/reset';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

React.useLayoutEffect = React.useEffect;

declare global {
  interface Window {
    naver: any;
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      />
    </Head>
    <ScrollToTop>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <title>로켓메이커스</title>
        <Component {...pageProps} />
      </ThemeProvider>
    </ScrollToTop>
  </>
);

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default MyApp;
