import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';
import * as T from 'components/Text';
import { Card } from 'components/Card';
import RatioBox from 'components/RatioBox';
import Icon from 'components/Icon';

interface Props {
  children?: any;
  onClick?: any;
}

const ContentCard: React.FC<Props> = (props) => {
  return (
    <CustomCard {...props}>
      <RatioBox src="https://picsum.photos/200" />
      <T.Text sm style={{ color: theme.color.PRIMARY, marginTop: 10 }}>
        Text Small
      </T.Text>
      <T.Title>Title</T.Title>
      <PriceText>
        <b>18%</b> Price
      </PriceText>
      <RateBox>
        <Icon name="star" color={theme.color.PRIMARY} />
        <p>5.0</p>
      </RateBox>
    </CustomCard>
  );
};
export default ContentCard;

const CustomCard = styled(Card)`
  padding: 20px 0px;
  flex-direction: column;
  width: 180px;
  cursor: pointer;
  > div > div {
    transition: 0.2s;
  }
  :hover {
    > div > div {
      transform: scale(1.1);
    }
  }
`;

const PriceText = styled.p`
  margin: 0px;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.2px;
  > b {
    color: ${theme.color.PRIMARY};
  }
`;

const RateBox = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin: 0px;
    margin-left: 7px;
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.16px;
  }
`;
