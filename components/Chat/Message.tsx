import React from 'react';
import styled, { css } from 'styled-components';

import theme from 'layout/theme';
import { MessageFormatTime } from 'utils/format';
import * as T from 'components/Text';

interface CardProps {
  data: any;
  onClick?: any;
  children?: any;
}

const MessageComponent: React.FC<CardProps> = ({
  children,
  data,
  ...props
}) => {
  return (
    <MessageBox>
      {!data.isSend && <img src="/images/profile_default.png" />}
      <TextBox isSend={data.isSend} {...props}>
        <div>
          <Text>{data.message}</Text>
        </div>
        <Date sm>{MessageFormatTime(data.date)}</Date>
      </TextBox>
    </MessageBox>
  );
};

interface MessageBoxType {
  isSend: boolean;
}
const MessageBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  > img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;
const TextBox = styled.div<MessageBoxType>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > div {
    border-radius: 5px;
    padding: 10px;
    background-color: ${theme.color.WHITE};
    color: ${theme.color.BLACK};
  }
  ${(props) =>
    props.isSend &&
    css`
      flex-direction: row-reverse;
      > div {
        background-color: ${theme.color.PRIMARY};
        color: ${theme.color.WHITE};
      }
    `}
`;
const Text = styled(T.Text)`
  white-space: pre;
`;
const Date = styled(T.Text)`
  align-self: flex-end;
  color: ${theme.color.GRAY5};
  margin: 0px 5px;
`;

export default MessageComponent;
