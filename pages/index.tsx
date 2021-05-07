import React from 'react';

import Layout from 'components/Layout';
import PoseNetContainer from 'containers/PoseNet';

const IndexPage = () => {
  return (
    <Layout title="Pro Pose">
      <PoseNetContainer />
    </Layout>
  );
};

export default IndexPage;
