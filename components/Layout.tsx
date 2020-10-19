import React, { FC } from 'react';

import Nav from './Nav';

const Layout: FC<any> = ({ children, site, childPageList }) => {
  return (
    <div>
      <Nav name={site.name} childPages={childPageList} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
