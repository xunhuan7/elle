import React from 'react';
import { connect } from 'dva';

import Header from '@/components/BasicLayout/Header';
import Footer from '@/components/BasicLayout/Footer';

class BasicLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <div style={{ flexGrow: 1 }}>
          {this.props.children}
          {this.props.name}
        </div>
        <Footer/>
      </React.Fragment>
    );
  }

};

export default BasicLayout;

