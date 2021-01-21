import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import { Card, CardHeader } from 'components/Card';

import ContentCard from './_fragments/ContentCard';
import OutlineCard from './_fragments/OutlineCard';
import ShippingCard from './_fragments/ShippingCard';
import OptionCard from './_fragments/OptionCard';

export default { title: 'Example/components/Card' };

export const Cards = () => {
  return (
    <CardList>
      <Card>
        <CardHeader
          avatar="https://picsum.photos/200"
          title="Title"
          subTitle="Sub Title"
          action={<Button width="100px" label="Action" />}
        />
      </Card>
      <Card>
        <CardHeader
          thumbnail="https://picsum.photos/200"
          title="Title"
          subTitle="Sub Title"
          action={<Time>Time</Time>}
        />
      </Card>
      <Card>
        <CardHeader
          thumbnail="https://picsum.photos/200"
          title="Title"
          subTitle="Sub Title"
        />
      </Card>
    </CardList>
  );
};

const CardList = styled.div`
  > div {
    margin-bottom: 10px;
  }
`;
const Time = styled.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.16px;
  text-align: right;
  color: #7a7a7c;
  margin: 0px;
`;

export const ContentCards = () => {
  return <ContentCard />;
};

export const OutlineCards = () => {
  return <OutlineCard />;
};

export const ShippingCards = () => {
  return <ShippingCard />;
};

export const OptionCards = () => {
  return <OptionCard />;
};
