import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';
import { intcomma } from 'utils/format';

import * as T from 'components/Text';
import { Card, CardHeader } from 'components/Card';
import Icon from 'components/Icon';

interface Props {
  children?: any;
  onClick?: any;
}

const ItemCard: React.FC<Props> = (props) => {
  return (
    <ItemBox {...props}>
      <CardHeader
        subTitle="그레이 / 50 X 50 cm"
        action={<Icon name="small-x" color={theme.color.GRAY4} />}
      />
      <Footer>
        <ButtonBox>
          <div>
            <Icon name="small-minus" color={theme.color.GRAY4} />
          </div>
          <div>
            <T.Text>{0}</T.Text>
          </div>
          <div>
            <Icon name="small-plus" color={theme.color.GRAY4} />
          </div>
        </ButtonBox>
        <T.Title>{intcomma(3200)}원</T.Title>
      </Footer>
    </ItemBox>
  );
};
export default ItemCard;

const ItemBox = styled(Card)`
  border-radius: 5px;
  background-color: ${theme.color.GRAY2};
  padding: 12px;
  h1,
  p {
    color: ${theme.color.GRAY5};
  }
`;

const ButtonBox = styled.div`
  display: flex;
  width: fit-content;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid ${theme.color.GRAY3};
  > div {
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.WHITE};
    :hover {
      background-color: ${theme.color.GRAY0};
    }
    :nth-child(2) {
      cursor: default;
      border-left: 1px solid ${theme.color.GRAY3};
      border-right: 1px solid ${theme.color.GRAY3};
      :hover {
        background-color: ${theme.color.WHITE};
      }
    }
    > p {
      line-height: 1;
      color: ${theme.color.GRAY5};
    }
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  > h1 {
    color: ${theme.color.BLACK};
  }
`;
