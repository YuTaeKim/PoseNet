import React from 'react';

import Layout from 'components/Layout';
import OrientationContainer from 'containers/PoseNet/orientation';

const IndexPage = () => {
  return (
    <Layout title="Pro Pose">
      <OrientationContainer />
    </Layout>
  );
};

export default IndexPage;
