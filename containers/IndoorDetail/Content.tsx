import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';
import { intcomma } from 'utils/format';

import Select from 'components/Select';
import Button from 'components/Button';
import Rate from 'components/Rate';
import RatioBox from 'components/RatioBox';
import * as T from 'components/Text';

interface Props {
  fixed?: boolean;
  style?: any;
}

const options = [
  { value: 1, label: '그레이' },
  { value: 2, label: '아이보리' },
  { value: 3, label: '블루' },
];
const sizeOptions = [
  { value: 50, label: '50 X 50 cm' },
  { value: 80, label: '80 X 80 cm' },
];

const ContentContainer: React.FC<Props> = () => {
  return (
    <>
      <ContentBox>
        <Image src="https://picsum.photos/200" />
        <Content>
          <UserInfo>
            <img src="/images/profile_default.png" />
            <div>
              <T.Title>ArchDica</T.Title>
              <T.Text sm>아키디카 디지털 카탈로그</T.Text>
            </div>
          </UserInfo>
          <Hr />
          <Name lg>다용도 타일 카펫</Name>
          <Hr />
          <RateBox>
            <Rate value={3.5} />
            <T.Title>3.5</T.Title>
          </RateBox>
          <DiscountBox>
            <T.Title lg>18%</T.Title>
            <T.Text>{intcomma(3800)}</T.Text>
          </DiscountBox>
          <Name lg>{intcomma(3800)}원</Name>
          <Hr />
          <ShippingBox>
            <div>
              <T.Text>일반택배</T.Text>
              <T.Text sm color={theme.color.GRAY5}>
                조건에 따라 추가비용 발생 가능
              </T.Text>
            </div>
            <T.Text color={theme.color.GRAY5}>{intcomma(3000)}원</T.Text>
          </ShippingBox>
          <Hr />
          <CutsomSelect
            isSearchable={false}
            options={options}
            placeholder="색상"
          />
          <CutsomSelect
            isSearchable={false}
            options={sizeOptions}
            placeholder="사이즈"
          />
          <PriceBox>
            <T.Text>
              총 수량 <b style={{ color: theme.color.PRIMARY }}>0</b> 개
            </T.Text>
            <div>
              <T.Text>합계</T.Text>
              <T.Title>0원</T.Title>
            </div>
          </PriceBox>
          <ButtonBox>
            <Button outline round label="견적상담" />
            <Button outline round label="장바구니에 담기" />
            <Button round label="지금 구매하기" />
          </ButtonBox>
          <MobileHr />
        </Content>
      </ContentBox>
    </>
  );
};

export default ContentContainer;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  /* Large PC */
  margin-top: 36px;
  /* Mobile */
  ${theme.window.mobile} {
    margin-top: 100%;
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: calc(50% - 15px);
  margin-left: 30px;
  /* Mobile */
  ${theme.window.mobile} {
    margin-top: 0px;
    margin-left: 0px;
    width: 100%;
  }
`;
const Image = styled(RatioBox)`
  border-radius: 0px;
  width: calc(50% - 15px) !important;
  /* Mobile */
  ${theme.window.mobile} {
    position: absolute;
    width: 100% !important;
    top: 0px;
    left: 0px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;

const Name = styled(T.Title)`
  font-weight: bold;
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.color.GRAY1};
  margin: 13px 0px;
  /* Mobile */
  ${theme.window.mobile} {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;
const MobileHr = styled.div`
  width: 100%;
  height: 9px;
  background-color: ${theme.color.GRAY1};
  margin: 13px 0px;
  display: none;
  /* Mobile */
  ${theme.window.mobile} {
    display: block;
    width: calc(100% + 40px);
    margin-left: -20px;
  }
`;
const RateBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  > h1 {
    font-weight: bold;
    margin-left: 5px;
  }
`;

const DiscountBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  > h1 {
    color: ${theme.color.PRIMARY};
    font-weight: bold;
    margin-right: 10px;
  }
  > p {
    text-decoration: line-through;
    color: ${theme.color.GRAY5};
  }
`;

const ShippingBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const CutsomSelect = styled(Select)`
  margin-bottom: 7px;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    > h1 {
      font-weight: bold;
      margin-left: 5px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 14px;
  > button {
    width: calc((100% - 10px) / 3);
  }
  ${theme.window.pc} {
    > button {
      width: calc((100% - 10px) / 2);
      :nth-of-type(3) {
        margin-top: 8px;
        width: 100%;
      }
    }
  }
`;
