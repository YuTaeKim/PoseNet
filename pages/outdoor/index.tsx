import React from 'react';

import IndoorContainer from 'containers/Outdoor';
import Layout from 'components/Layout';

const IndexPage = () => {
  return (
    <Layout title="똑똑한개발자" pageName="실외">
      <IndoorContainer />
    </Layout>
  );
};

export default IndexPage;
