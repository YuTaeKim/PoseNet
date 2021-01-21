import { Meta, Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Icon, { IconProps } from './index';

export default {
  title: 'Example/components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [
          'success',
          'star',
          'star-half',
          'star-o',
          'qr',
          'search',
          'home',
          'chat',
          'mypage',
          'shopping',
          'arrow-left',
          'plus',
          'alert',
          'close',
          'small-x',
          'small-minus',
          'small-plus',
          'check-box',
          'setting',
          'truck',
          'box',
          'message',
          'arrow-right',
        ],
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const alert = Template.bind({});
alert.args = {
  name: 'alert',
};

export const arrowLeft = Template.bind({});
arrowLeft.args = {
  name: 'arrow-left',
};

export const arrowRight = Template.bind({});
arrowRight.args = {
  name: 'arrow-right',
};

export const box = Template.bind({});
box.args = {
  name: 'box',
};

export const chat = Template.bind({});
chat.args = {
  name: 'chat',
};

export const checkBox = Template.bind({});
checkBox.args = {
  name: 'check-box',
};

export const close = Template.bind({});
close.args = {
  name: 'close',
};

export const home = Template.bind({});
home.args = {
  name: 'home',
  fill: true,
};

export const message = Template.bind({});
message.args = {
  name: 'message',
};

export const mypage = Template.bind({});
mypage.args = {
  name: 'mypage',
};

export const plus = Template.bind({});
plus.args = {
  name: 'plus',
};

export const qr = Template.bind({});
qr.args = {
  name: 'qr',
};

export const search = Template.bind({});
search.args = {
  name: 'search',
};

export const setting = Template.bind({});
setting.args = {
  name: 'setting',
};

export const shopping = Template.bind({});
shopping.args = {
  name: 'shopping',
};

export const smallMinus = Template.bind({});
smallMinus.args = {
  name: 'small-minus',
};

export const smallPlus = Template.bind({});
smallPlus.args = {
  name: 'small-plus',
};

export const smallX = Template.bind({});
smallX.args = {
  name: 'small-x',
};

export const star = Template.bind({});
star.args = {
  name: 'star',
};

export const starHalf = Template.bind({});
starHalf.args = {
  name: 'star-half',
};

export const starO = Template.bind({});
starO.args = {
  name: 'star-o',
};

export const success = Template.bind({});
success.args = {
  name: 'success',
};

export const truck = Template.bind({});
truck.args = {
  name: 'truck',
};

export const all = () => {
  return (
    <div style={{ display: 'flex', padding: '30px' }}>
      <FlexWrap>
        <div>
          <Icon name="alert" /> Alert
        </div>
        <div>
          <Icon name="arrow-left" /> ArrowLeft
        </div>
        <div>
          <Icon name="arrow-right" /> ArrowRight
        </div>
        <div>
          <Icon name="box" /> Box
        </div>
        <div>
          <Icon name="chat" fill /> Chat
        </div>
        <div>
          <Icon name="check-box" /> CheckBox
        </div>
        <div>
          <Icon name="close" /> Close
        </div>
        <div>
          <Icon name="home" fill /> Home
        </div>
        <div>
          <Icon name="message" /> Message
        </div>
        <div>
          <Icon name="mypage" /> MyPage
        </div>

        <div>
          <Icon name="plus" /> Plus
        </div>
      </FlexWrap>
      <FlexWrap>
        <div>
          <Icon name="qr" /> QR
        </div>
        <div>
          <Icon name="search" /> Search
        </div>
        <div>
          <Icon name="setting" /> Setting
        </div>
        <div>
          <Icon name="shopping" /> Shopping
        </div>
        <div>
          <Icon name="small-minus" /> SmallMinus
        </div>
        <div>
          <Icon name="small-plus" /> SmallPlus
        </div>
        <div>
          <Icon name="small-x" /> SmallX
        </div>
        <div>
          <Icon name="star" /> Star
        </div>
        <div>
          <Icon name="star-half" /> StarHalf
        </div>

        <div>
          <Icon name="star-o" /> StarO
        </div>
        <div>
          <Icon name="success" /> Success
        </div>
        <div>
          <Icon name="truck" /> Truck
        </div>
      </FlexWrap>
    </div>
  );
};

const FlexWrap = styled.div`
  &:first-child {
    margin-right: 50px;
  }
  > div {
    margin-bottom: 10px;
  }
`;
