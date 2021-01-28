import React from 'react';

import Layout from 'components/Layout';
import ManualContainer from 'containers/Manual';

console.log('page download');

const IndexPage = () => {
  return (
    <Layout title="Manual | YuTae">
      {console.log('page render')}
      <ManualContainer />
    </Layout>
  );
};

export default IndexPage;
