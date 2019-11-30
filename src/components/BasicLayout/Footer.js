import React from 'react';

import styles from '@/components/BasicLayout/Footer.less';

class Footer extends React.Component {

  render() {
    return (
      <section>
        <div className={`container-fluid ${styles.footer}`}>
          <p>
            <span>SoupCraft is powered by</span>
            <a href="https://github.com/nestjs/nest" target='_blank' rel="noopener noreferrer">Nest.js</a>
            <span>and</span>
            <a href="https://github.com/umijs/umi" target='_blank' rel="noopener noreferrer">umi</a>
          </p>
        </div>
      </section>
    );
  }

}

export default Footer;
