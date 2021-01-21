import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react/types-6-0';

import CheckBox, { CheckboxProps } from 'components/CheckBox';
import Container from 'components/Container';

export default {
  title: 'Example/components/CheckBox',
  component: CheckBox,
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <CheckBox {...args} />;

export const checkbox = Template.bind({});
checkbox.args = {
  checked: true,
};

export const checkboxNo = Template.bind({});
checkboxNo.args = {
  checked: false,
};

export const checkboxAll = () => (
  <CustomContainer>
    <CheckBox checked={true} />
    <CheckBox checked={false}>체크박스</CheckBox>
  </CustomContainer>
);

const CustomContainer = styled(Container)``;
