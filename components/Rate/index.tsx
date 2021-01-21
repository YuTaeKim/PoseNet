import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';
import Icon from 'components/Icon';

interface Props {
  count?: number;
  value?: number;
  defaultValue?: number;
  size?: number;
  onClick?: any;
  children?: any;
  style?: any;
}

const Rate: React.FC<Props> = ({
  count = 5,
  value = 0,
  children,
  ...props
}) => {
  const n = Math.abs(value); // Change to positive
  const decimal = n - Math.floor(n);
  const newValue = n - decimal;
  var data = [];
  if (decimal > 0) {
    data = [
      ...Array(newValue).fill('star'),
      'star-half',
      ...Array(count - newValue - 1).fill('star-o'),
    ];
  } else {
    data = [
      ...Array(newValue).fill('star'),
      ...Array(count - newValue).fill('star-o'),
    ];
  }

  return (
    <RateBox {...props}>
      {data.map((item, idx) => {
        return <Icon key={idx} name={item} color={theme.color.PRIMARY} />;
      })}
    </RateBox>
  );
};

export default Rate;

const RateBox = styled.div`
  display: flex;
  align-items: center;
  > svg {
    width: 17px;
    height: 17px;
    margin-right: 4px;
  }
`;
