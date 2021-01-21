import React from 'react';

import BedIcon from './Bed';
import HomeIcon from './Home';
import SearchIcon from './Search';
import FixIcon from './Fix';
import AIIcon from './AI';
import AddIcon from './Add';

interface Props {
  name: string;
  color?: string;
  style?: any;
  className?: any;
}

const Icon: React.FC<Props> = ({ name, ...props }) => {
  switch (name) {
    case 'bed':
      return <BedIcon {...props} />;
    case 'home':
      return <HomeIcon {...props} />;
    case 'search':
      return <SearchIcon {...props} />;
    case 'fix':
      return <FixIcon {...props} />;
    case 'ai':
      return <AIIcon {...props} />;
    case 'add':
      return <AddIcon {...props} />;
  }
  return null;
};

export default Icon;
