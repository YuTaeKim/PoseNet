import React from 'react';

import Layout from 'components/Layout';
import TasteContainer from 'containers/PoseNet/posenetTaste';

const IndexPage = () => {
  return (
    <Layout title="Pro Pose">
      <TasteContainer />
    </Layout>
  );
};

export default IndexPage;
