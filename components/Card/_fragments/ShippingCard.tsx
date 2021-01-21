import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';

import * as T from 'components/Text';
import { Card, CardHeader } from 'components/Card';

interface Props {
  children?: any;
  onClick?: any;
}

const ShippingCard: React.FC<Props> = (props) => {
  return (
    <ShippingBox {...props}>
      <CardHeader title="배송지" action={<EditText>수정</EditText>} />
      <Text>김배송</Text>
      <Text>010-1234-5678</Text>
      <Text>서울특별시 마포구 연희로 1길 (동교동) (01234)</Text>
    </ShippingBox>
  );
};
export default ShippingCard;

const ShippingBox = styled(Card)`
  border-radius: 5px;
  border: 1px solid ${theme.color.PRIMARY};
  background-color: ${theme.color.WHITE};
  padding: 12px;
  h1,
  p {
    color: ${theme.color.PRIMARY};
  }
`;

const EditText = styled(T.Title)`
  color: ${theme.color.BLACK} !important;
  white-space: nowrap;
  font-weight: normal;
  cursor: pointer;
`;

const Text = styled(T.Text)`
  color: ${theme.color.GRAY4} !important;
  margin-top: 5px;
`;
