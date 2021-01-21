import React from "react";

import LoginContainer from "containers/Login";
import Layout from "components/Layout";

const LoginPage = () => {
  return (
    <Layout title="아키디카" noHeader centered>
      <LoginContainer />
    </Layout>
  );
};

export default LoginPage;
