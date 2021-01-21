import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import theme from 'layout/theme';
import Tabs from 'components/Tabs';

export default {
  title: 'Example/components/Tabs',
  component: Tabs,
  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
    itemStyle: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const CATEGORIES = [
  { id: 1, name: '벽지' },
  { id: 2, name: '장판' },
  { id: 3, name: '필름' },
  { id: 4, name: '데코타일' },
  { id: 5, name: '포트폴리오' },
  { id: 6, name: '마루' },
  { id: 7, name: '몰딩' },
  { id: 8, name: '문' },
  { id: 9, name: '욕실' },
];

const Template: Story = (args) => (
  <div style={{ backgroundColor: theme.color.WHITE }}>
    <Tabs {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: CATEGORIES,
};

export const Centered = Template.bind({});
Centered.args = {
  centered: true,
  data: CATEGORIES,
};
