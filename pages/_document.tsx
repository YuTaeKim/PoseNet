import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

console.log('_document download');

const SITE_NAME = 'SITE_NAME';
const SITE_TITLE = 'SITE_TITLE';
const SITE_DESCRIPTION = 'SITE_DESCRIPTION';
const SITE_IMAGE = 'SITE_IMAGE';

interface Props {
  styleTags: any;
  styleTags2: any;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet();
    const sheet2 = new ServerStyleSheets();
    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(sheet2.collect(<App {...props} />)),
    );
    const styleTags = sheet.getStyleElement();
    const styleTags2 = sheet2.getStyleElement();
    return { ...page, styleTags, styleTags2 };
  }
  setGoogleTags() {
    return {
      __html: `        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-155067425-1');
      `,
    };
  }
  render() {
    return (
      <Html>
        {console.log('_document render')}
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
          />
          <link rel="apple-touch-icon" href="/icons/120.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/167.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link rel="canonical" href="https://rocketmakers.io/" />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />
          <link rel="shortcut icon" href="/Profile.jpeg" />
          <link rel="manifest" href="/manifest.json" />
          {/* Google Analytics */}
          <script
            type="text/javascript"
            src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
          />
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          {this.props.styleTags}
          {this.props.styleTags2}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
