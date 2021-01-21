// import baseStyled, { ThemedStyledInterface } from "styled-components";

const size = {
  mobile: 767.98,
  tab: 991.98,
  pc: 1299.98,
};

const theme = {
  color: {
    PRIMARY: '#4575f5',
    SECONDARY: '#F77721',
    PRIMARYSUB: '#C3DCFF',
    SECONDARYSUB: '#FFCAB2',
    POINT: '#1774fd',
    BLACK: '#000000',
    GRAY5: '#444444',
    GRAY4: '#767676',
    GRAY3: '#C6C6C6',
    GRAY2: '#E6E6E6',
    GRAY1: '#E5E5E5',
    GRAY0: '#FAFAFA',
    WHITE: '#FFFFFF',
    SUCCESS: '#5FD04B',
    DANGER: '#FF5800',
    WARNING: '#FFC440',
    INFO: '#24ADF5',
  },
  radius: 4,
  window: {
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    pc: `@media screen and (max-width: ${size.pc}px)`,
  },
};

// export type Theme = typeof theme;
// export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
