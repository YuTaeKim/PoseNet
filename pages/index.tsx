import React from 'react';

import Layout from 'components/Layout';
import ManualContainer from 'containers/Manual';
import dynamic from 'next/dynamic';

console.log('page download');

const DynamicComponent = dynamic(() => import('containers/Test/Push'), {
  ssr: false,
});

const IndexPage = () => {
  return (
    <Layout title="Manual | YuTae">
      {console.log('page render')}
      <ManualContainer />
      {/* <DynamicComponent /> */}
    </Layout>
  );
};

export default IndexPage;
