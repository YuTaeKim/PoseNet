import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Input, { Props } from 'components/Input';
import Button from 'components/Button';

export default {
  title: 'Example/components/Input',
  component: Input,
  argTypes: {
    action: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Caption *',
  placeholder: 'placeholder',
  action: <Button width="100px" label="재전송" />,
};
