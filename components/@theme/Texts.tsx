import React from 'react';
import styled, { css } from 'styled-components';

import * as T from 'components/Text';
import theme from 'layout/theme';

import { Props } from './types';

const Texts: React.FC<Props> = () => {
  return (
    <>
      <h1 style={{ color: theme.color.PRIMARY }}>TYPOGRAPHY</h1>
      <TextBox>
        <T.Title lg>Title Large</T.Title>
        <T.Title>Title</T.Title>
        <T.Title bold>Title with Bold</T.Title>
        <T.Title color="blue">Title with Color</T.Title>
        <T.Title sm>Title Small</T.Title>
      </TextBox>
      <TextBox>
        <T.Text>Text Large</T.Text>
        <T.Text>Text</T.Text>
        <T.Text bold>Text with Bold</T.Text>
        <T.Text color="pink">Text with Color</T.Text>
        <T.Text>Text Small</T.Text>
      </TextBox>
      <TextBox last>
        <T.Button>Button</T.Button>
        <T.Button bold>Button with Bold</T.Button>
        <T.Button color={theme.color.PRIMARY}>Button with Color</T.Button>
        <T.ButtonSmall>Small</T.ButtonSmall>
        <T.ButtonSmall bold>Small with Thin Bold</T.ButtonSmall>
        <T.ButtonSmall color={theme.color.SECONDARY}>
          Small with Color
        </T.ButtonSmall>
        <T.Caption>Caption</T.Caption>
        <T.Caption bold>Caption with Very Thin Bold</T.Caption>
        <T.Caption color={theme.color.INFO}>Caption with Color</T.Caption>
      </TextBox>
    </>
  );
};

export default Texts;

interface styleProps {
  last?: boolean;
}

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: 1px solid #e6e6e6;
  ${(props: styleProps) =>
    props.last &&
    css`
      border-bottom: 0px;
    `}

  margin-bottom: 20px;
  padding-bottom: 20px;

  h1,
  h2,
  h3,
  p {
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;
