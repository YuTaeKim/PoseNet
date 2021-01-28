import React from 'react';

import Layout from 'components/Layout';
import TestContainer from 'containers/Test';

console.log('page download');

const IndexPage = () => {
  return (
    <Layout title="Manual | YuTae">
      {console.log('page render')}
      <TestContainer />
    </Layout>
  );
};

export default IndexPage;
