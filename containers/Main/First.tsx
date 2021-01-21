import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import { Props } from './types';
import { red } from '@material-ui/core/colors';

import Main from './index';
import Second from './Second';

import TestStore from 'stores/Test';
import { observer } from 'mobx-react-lite';

import DatePicker from 'react-datepicker';
import Slider from 'react-slick';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface Props {
  children?: any;
}

const FirstContainer: React.FC<Props> = observer(({ children }) => {
  const router = useRouter();
  const testStore = useContext(TestStore);
  const selectValue = useRef<any>();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [flag, setFlag] = useState<boolean>(false);

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    testStore.selectValue = selectValue.current.value;
  }, []);

  return (
    <Container>
      <div style={{ marginBottom: '100px' }}>
        <Text visible={flag}>top of children</Text>
        {children}
        <Text visible={flag}>bottom of children</Text>
        <button onClick={() => setFlag(true)}>CLick!</button>
        <button onClick={() => setFlag(false)}>CLick!</button>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="test"
            value={testStore.radio1}
            onChange={() => testStore.setValue(testStore.radio1)}
          ></input>
          {testStore.radio1}
        </label>
        <label>
          <input
            type="radio"
            name="test"
            value={testStore.radio2}
            onChange={() => testStore.setValue(testStore.radio2)}
          ></input>
          {testStore.radio2}
        </label>
        <label>
          <input
            type="radio"
            name="test"
            value={testStore.radio3}
            onChange={() => testStore.setValue(testStore.radio3)}
          ></input>
          {testStore.radio3}
        </label>
        <button onClick={() => alert(testStore.radioValue)}>Click!</button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value={testStore.checkBox1}
            onChange={(e) => testStore.setCheck(e)}
          ></input>
          {testStore.checkBox1}
        </label>
        <label>
          <input
            type="checkbox"
            value={testStore.checkBox2}
            onChange={(e) => testStore.setCheck(e)}
          ></input>
          {testStore.checkBox2}
        </label>
        <label>
          <input
            type="checkbox"
            value={testStore.checkBox3}
            onChange={(e) => testStore.setCheck(e)}
          ></input>
          {testStore.checkBox3}
        </label>
        <button onClick={() => alert(testStore.checkBoxValue)}>Click!</button>
      </div>
      <div>
        <label>
          Select Please:
          <select ref={selectValue} onChange={(e) => testStore.setSelect(e)}>
            <option value={testStore.select1}>{testStore.select1}</option>
            <option value={testStore.select2}>{testStore.select2}</option>
            <option value={testStore.select3}>{testStore.select3}</option>
          </select>
        </label>
        <button onClick={() => alert(testStore.selectValue)}>Click!</button>
      </div>
      <div style={{ display: 'flex' }}>
        <DatePicker
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
        />
        <DatePicker
          selected={endDate}
          onChange={(date: any) => setEndDate(date)}
        />
        <button
          onClick={() => {
            // alert(startDate);
            console.log(startDate.toJSON());
          }}
        >
          Click!
        </button>
        <button onClick={() => alert(endDate)}>Click!</button>
      </div>
      <div>
        <h2>Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      <h1>fewqfqwe</h1>
      <h1>fewqfqwe</h1>
      <h1>fewqfqwe</h1>
      <h1>fewqfqwe</h1>
      <h1>fewqfqwe</h1>
      <h1>fewqfqwe</h1>
      <h1>fewqfqwe</h1>
      <h1>fewqfqwe</h1>
      <div>
        {' '}
        <motion.div drag="x" style={{ x, opacity }}>
          asaededeedded
        </motion.div>
      </div>
    </Container>
  );
});

export default FirstContainer;

const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;
`;

type styleProps = {
  visible?: boolean;
};

const Text = styled.p<styleProps>`
  /* visibility: hidden; */
  position: relative;
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      top: 0px;
      visibility: visible;
      transition: 3s ease;
    `}

  ${(props) =>
    !props.visible &&
    css`
      opacity: 0;
      top: 300px;
      visibility: hidden;
      transition: 3s ease;
    `}
`;
