import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../layout/reset';
import theme from '../layout/theme';

const withThemeProvider = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];

const customViewports = {
  iphoneSE: {
    name: 'iphoneSE',
    styles: {
      width: '320px',
      height: '568px;',
    },
  },
  iphone6: {
    name: 'iphone6',
    styles: {
      width: '375px',
      height: '667px;',
    },
  },
  mobile: {
    name: 'mobile',
    styles: {
      width: '767.98px',
      height: '100%;',
    },
  },
  tab: {
    name: 'tab',
    styles: {
      width: '991.98.98px',
      height: '100%;',
    },
  },
  pc: {
    name: 'pc',
    styles: {
      width: '1299.98px',
      height: '100%;',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'gray',
    values: [
      { name: 'gray', value: '#f2f2f2' },
      { name: 'white', value: '#fff' },
      { name: 'dark', value: '#101214' },
    ],
  },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'someDefault',
  },
};
