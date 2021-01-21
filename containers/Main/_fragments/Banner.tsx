import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import theme from 'layout/theme';

import RatioBox from 'components/RatioBox';
import * as T from 'components/Text';

import { Props } from '../types';

const BannerContainer: React.FC<Props> = () => {
  const [active, setActive] = useState<number>(1);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setActive(next),
  };

  return (
    <div style={{ position: 'relative' }}>
      <Slider {...settings}>
        <RatioBox ratio="30%" src="/images/banner/1.png" />
        <RatioBox ratio="30%" src="/images/banner/1.png" />
        <RatioBox ratio="30%" src="/images/banner/1.png" />
      </Slider>
      <PageNumber>
        <T.Caption>{active + 1} / 3</T.Caption>
      </PageNumber>
    </div>
  );
};

export default BannerContainer;

const PageNumber = styled.div`
  position: absolute;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: #000a;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    color: ${theme.color.WHITE};
  }
  /* Large PC */
  right: 20px;
  bottom: 15px;

  /* Small PC */
  ${(props) => props.theme.window.pc} {
    right: 20px;
    bottom: 15px;
  }
  /* Tab */
  ${(props) => props.theme.window.tab} {
    right: 10px;
    bottom: 13px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    right: 10px;
    bottom: 13px;
  }
`;
