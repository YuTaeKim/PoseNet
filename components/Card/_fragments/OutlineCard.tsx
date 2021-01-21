import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';

import * as T from 'components/Text';
import { Card, CardHeader } from 'components/Card';
import Icon from 'components/Icon';

interface Props {
  children?: any;
  onClick?: any;
}

const OutlineCard: React.FC<Props> = (props) => {
  return (
    <AlertBox {...props}>
      <CardHeader
        title="주의사항"
        action={<Icon name="alert" color={theme.color.PRIMARY} />}
      />
      <T.Caption>
        문제가 발생하는 경우 고객센터로 연락주시기 바랍니다.
      </T.Caption>
    </AlertBox>
  );
};
export default OutlineCard;

const AlertBox = styled(Card)`
  border-radius: 5px;
  border: 1px solid ${theme.color.PRIMARY};
  background-color: ${theme.color.WHITE};
  padding: 12px;
  h1,
  p {
    color: ${theme.color.PRIMARY};
  }
`;
