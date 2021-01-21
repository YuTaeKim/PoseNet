import React, { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import theme from 'layout/theme';

// import Nav from 'components/Nav';
// import Footer from "./Footer";

interface Props {
  pageName?: string;
  noHeader?: boolean;
  centered?: boolean;
  transparent?: boolean;
  children?: ReactNode;
  title?: string;
}

const Layout = ({
  // pageName,
  children,
  // noHeader,
  // centered,
  // transparent,
  title = '패밀리노트',
}: Props) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const updateSize = () => {
      setHeight(window.innerHeight);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <div style={{ background: theme.color.GRAY4 }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Body height={height}>{children}</Body>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

interface styleProps {
  height: number;
}

const Body = styled.div<styleProps>`
  display: flex;
  max-width: 600px;
  margin: auto;
  height: ${(props) => `${props.height}px`};
`;
