import React from 'react';
import { connect } from 'dva';

import Header from '@/layouts/BasicLayout/components/Header';
import Footer from '@/layouts/BasicLayout/components/Footer';

function BasicLayout(props) {
  return (
    <React.Fragment>
      <Header/>
      <div style={{ flexGrow: 1 }}>
        {props.children}
      </div>
      {/*<div style={{ flexGrow: 1 }}>{props.name}</div>*/}
      <Footer/>
    </React.Fragment>
  );

};

export default connect(({ menu: menuModel }) => ({
  name: menuModel.name,
}))(BasicLayout);

