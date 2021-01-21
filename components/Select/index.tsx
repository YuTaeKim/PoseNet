/* eslint-disable no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import theme from 'layout/theme';

const customStyles = {
  menu: (provided: any) => ({
    ...provided,
    margin: 0,
    top: 'calc(100% - 2px)',
    boxShadow: 'none',
    border: `1px solid ${theme.color.GRAY1}`,
    borderTop: 0,
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    borderTop: `1px solid ${theme.color.GRAY1}`,
    color: state.isSelected ? theme.color.PRIMARY : theme.color.GRAY4,
    backgroundColor: state.isSelected
      ? theme.color.PRIMARYSUB
      : theme.color.GRAY0,
  }),
  control: (_: any, state: any) => ({
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${theme.color.GRAY1}`,
    height: 50,
    borderRadius: 5,
    borderBottomRightRadius: state.selectProps.menuIsOpen ? 0 : 5,
    borderBottomLeftRadius: state.selectProps.menuIsOpen ? 0 : 5,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  valueContainer: () => ({
    width: '100%',
    padding: '0px 16px',
    display: 'flex',
    alignItems: 'center',
  }),
  indicatorsContainer: () => ({
    padding: '5px 8px',
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
};

interface Props {
  options?: any;
  placeholder?: string;
  isSearchable?: boolean;
  onClick?: any;
  children?: any;
  style?: any;
}

const SelectComponent: React.FC<Props> = (props) => {
  return <CustomSelect {...props} styles={customStyles} />;
};

export default SelectComponent;

const CustomSelect = styled(Select)`
  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.color.PRIMARY};
  }
`;
