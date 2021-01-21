import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';

import { Props } from './types';

const Colors: React.FC<Props> = () => {
  return (
    <>
      <h1>Brand Color</h1>
      <ColorBox>
        <Color color={theme.color.PRIMARY}>
          <div />
          <p>PRIMARY</p>
          <p>{theme.color.PRIMARY}</p>
        </Color>
        <Color color={theme.color.SECONDARY}>
          <div />
          <p>SECONDARY</p>
          <p>{theme.color.SECONDARY}</p>
        </Color>
      </ColorBox>
      <h1>Gray Scale</h1>
      <ColorBox>
        <Color color={theme.color.BLACK}>
          <div />
          <p>BLACK</p>
          <p>{theme.color.BLACK}</p>
        </Color>
        <Color color={theme.color.GRAY5}>
          <div />
          <p>GRAY5</p>
          <p>{theme.color.GRAY5}</p>
        </Color>
        <Color color={theme.color.GRAY4}>
          <div />
          <p>GRAY4</p>
          <p>{theme.color.GRAY4}</p>
        </Color>
        <Color color={theme.color.GRAY3}>
          <div />
          <p>GRAY3</p>
          <p>{theme.color.GRAY3}</p>
        </Color>
        <Color color={theme.color.GRAY2}>
          <div />
          <p>GRAY2</p>
          <p>{theme.color.GRAY2}</p>
        </Color>
        <Color color={theme.color.GRAY1}>
          <div />
          <p>GRAY1</p>
          <p>{theme.color.GRAY1}</p>
        </Color>
        <Color color={theme.color.GRAY0}>
          <div />
          <p>GRAY0</p>
          <p>{theme.color.GRAY0}</p>
        </Color>
        <Color color={theme.color.WHITE}>
          <div style={{ border: `1px solid ${theme.color.GRAY3}` }} />
          <p>WHITE</p>
          <p>{theme.color.WHITE}</p>
        </Color>
      </ColorBox>
      <h1>Alert Color</h1>
      <ColorBox>
        <Color color={theme.color.SUCCESS}>
          <div />
          <p>SUCCESS</p>
          <p>{theme.color.SUCCESS}</p>
        </Color>
        <Color color={theme.color.DANGER}>
          <div />
          <p>DANGER</p>
          <p>{theme.color.DANGER}</p>
        </Color>
        <Color color={theme.color.WARNING}>
          <div />
          <p>WARNING</p>
          <p>{theme.color.WARNING}</p>
        </Color>
        <Color color={theme.color.INFO}>
          <div />
          <p>INFO</p>
          <p>{theme.color.INFO}</p>
        </Color>
      </ColorBox>
    </>
  );
};

export default Colors;

interface styleProps {
  color: string;
}

const ColorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Color = styled.div`
  margin-bottom: 10px;
  > div {
    border-radius: 4px;
    width: 100px;
    height: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: ${(props: styleProps) => props.color};
  }
  > p {
    :nth-of-type(1) {
      margin: 0px;
    }
    :nth-of-type(2) {
      margin: 0px;
      color: ${theme.color.GRAY5};
    }
  }
`;
