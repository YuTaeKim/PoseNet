import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';

import * as T from 'components/Text';
import Tabs from 'components/Tabs';

interface Props {
  fixed?: boolean;
  style?: any;
}

const DATA = [
  { id: 1, name: '상품정보' },
  { id: 2, name: '리뷰', value: 13 },
  { id: 3, name: '교환/환불정책' },
];

const TabContainer: React.FC<Props> = () => {
  return (
    <TabBox>
      <Tabs
        centered
        data={DATA}
        render={(item: any, idx: number) => (
          <Tab key={idx}>
            <T.Text sm>{item.name}</T.Text>
            {item.value && <T.Text sm>{item.value}</T.Text>}
          </Tab>
        )}
      />
    </TabBox>
  );
};

export default TabContainer;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 70px;
  > p {
    :nth-of-type(1) {
      font-weight: bold;
    }
    :nth-of-type(2) {
      margin-left: 3px;
    }
  }
  ${theme.window.tab} {
    width: 200px;
  }
  ${theme.window.mobile} {
    flex-direction: column;
    width: 110px;
    height: 65px;
    > p {
      :nth-of-type(2) {
        margin-left: 0px;
        margin-bottom: -15px;
      }
    }
  }
`;
const TabBox = styled.div``;
