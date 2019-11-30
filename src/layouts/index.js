import React from 'react';

import BasicLayout from '@/layouts/BasicLayout';

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BasicLayout {...this.props}/>
    );
  }

}

export default Layout;
