import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import IndoorDetailContainer from 'containers/IndoorDetail';
import Layout from 'components/Layout';

const IndexPage = () => {
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    console.log('id : ', id);
  }, [router]);
  return (
    <Layout title="똑똑한개발자" pageName=" " transparent>
      <IndoorDetailContainer />
    </Layout>
  );
};

export default IndexPage;
