import React, { useRef, useEffect } from 'react';
import { withRouter, SingletonRouter } from 'next/router';

interface Props {
  router: SingletonRouter;
  children?: any;
}

const ScrollToTop: React.FC<Props> = (props) => {
  const prevRouterRef = useRef<any>();
  useEffect(() => {
    if (props.router.pathname !== prevRouterRef.current) {
      window.scrollTo(0, 0);
    }
    prevRouterRef.current = props.router.pathname;
  });
  return props.children;
};

export default withRouter(ScrollToTop);
