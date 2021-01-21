import React from 'react';
import SuccessIcon from './Success';
import StarIcon from './Star';
import StarHalfIcon from './StarHalf';
import StarOIcon from './StarO';
import QRIcon from './QR';
import SearchIcon from './Search';
import HomeIcon from './Home';
import ChatIcon from './Chat';
import MypageIcon from './Mypage';
import ShoppingIcon from './Shopping';
import ArrowLeftIcon from './ArrowLeft';
import PlusIcon from './Plus';
import AlertIcon from './Alert';
import CloseIcon from './Close';
import CheckBoxIcon from './CheckBox';
import SmallXIcon from './SmallX';
import SmallMinusIcon from './SmallMinus';
import SmallPlusIcon from './SmallPlus';
import SettingIcon from './Setting';
import TruckIcon from './Truck';
import BoxIcon from './Box';
import MessageIcon from './Message';
import ArrowRightIcon from './ArrowRight';

export type IconName =
  | 'success'
  | 'star'
  | 'star-half'
  | 'star-o'
  | 'qr'
  | 'search'
  | 'home'
  | 'chat'
  | 'mypage'
  | 'shopping'
  | 'arrow-left'
  | 'plus'
  | 'alert'
  | 'close'
  | 'small-x'
  | 'small-minus'
  | 'small-plus'
  | 'check-box'
  | 'setting'
  | 'truck'
  | 'box'
  | 'message'
  | 'arrow-right';

export interface IconProps {
  onClick?: any;
  name?: IconName;
  color?: string;
  style?: any;
  fill?: boolean;
  className?: any;
  width?: string;
  height?: string;
}

/**
 * Icon은 모두 svg로 만들어졌습니다.
 */
const Icon: React.FC<IconProps> = ({
  name,
  fill,
  width = '24px',
  height = '24px',
  ...props
}) => {
  switch (name) {
    case 'success':
      return <SuccessIcon {...props} />;
    case 'star':
      return <StarIcon {...props} />;
    case 'star-half':
      return <StarHalfIcon {...props} />;
    case 'star-o':
      return <StarOIcon {...props} />;
    case 'qr':
      return <QRIcon {...props} />;
    case 'search':
      return <SearchIcon {...props} />;
    case 'arrow-left':
      return <ArrowLeftIcon {...props} />;
    case 'home':
      return <HomeIcon {...props} fill={fill} />;
    case 'chat':
      return <ChatIcon {...props} fill={fill} />;
    case 'mypage':
      return <MypageIcon {...props} fill={fill} />;
    case 'shopping':
      return <ShoppingIcon {...props} fill={fill} />;
    case 'plus':
      return <PlusIcon {...props} fill={fill} />;
    case 'alert':
      return <AlertIcon {...props} fill={fill} />;
    case 'close':
      return <CloseIcon {...props} />;
    case 'check-box':
      return <CheckBoxIcon {...props} fill={fill} />;
    case 'small-x':
      return <SmallXIcon {...props} />;
    case 'small-minus':
      return <SmallPlusIcon {...props} />;
    case 'small-plus':
      return <SmallMinusIcon {...props} />;
    case 'setting':
      return <SettingIcon {...props} />;
    case 'truck':
      return <TruckIcon {...props} />;
    case 'box':
      return <BoxIcon {...props} />;
    case 'message':
      return <MessageIcon {...props} />;
    case 'arrow-right':
      return <ArrowRightIcon {...props} />;
  }
  return null;
};

export default Icon;
