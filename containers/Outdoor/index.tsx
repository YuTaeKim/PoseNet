import React from 'react';

import Tabs from 'components/Tabs';
import Container from 'components/Container';
import ContentContainer from './Content';

interface Props {
  fixed?: boolean;
  style?: any;
}

const CATEGORIES = [
  { id: 1, name: '벽지' },
  { id: 2, name: '장판' },
  { id: 3, name: '필름' },
  { id: 4, name: '데코타일' },
  { id: 5, name: '포트폴리오' },
  { id: 6, name: '마루' },
  { id: 7, name: '몰딩' },
  { id: 8, name: '문' },
  { id: 9, name: '욕실' },
];

const MainContainer: React.FC<Props> = () => {
  return (
    <div style={{ flexDirection: 'column' }}>
      <Tabs data={CATEGORIES} />
      <Container>
        <ContentContainer />
      </Container>
    </div>
  );
};

export default MainContainer;
