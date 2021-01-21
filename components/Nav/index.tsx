import React from 'react';

import PCNav from './nav_pc';
import MobileNav from './nav_mo';
import { PCView, MobileView } from './nav.styled';

interface Props {
  pageName?: string;
  fixed?: boolean;
  transparent?: boolean;
  noBorder?: boolean;
  style?: any;
}

const Nav: React.FC<Props> = ({ pageName, noBorder, transparent }) => {
  return (
    <>
      <PCView>
        <PCNav />
      </PCView>
      <MobileView>
        <MobileNav
          noBorder={noBorder}
          pageName={pageName}
          transparent={transparent}
        />
      </MobileView>
    </>
  );
};

export default Nav;
