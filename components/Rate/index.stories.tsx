import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import RatioBox from 'components/RatioBox';

export default { title: 'Example/components/RatioBox' };

export const ratioImage = () => (
  <CustomContainer>
    <RatioBox src="https://picsum.photos/200" />
    <RatioBox src="https://picsum.photos/200" />
    <RatioBox src="https://picsum.photos/200" />
    <RatioBox src="https://picsum.photos/200" />
  </CustomContainer>
);

const CustomContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  > div {
    width: calc((100% - 30px) / 4);
  }
`;
