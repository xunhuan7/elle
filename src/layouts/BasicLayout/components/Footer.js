import React from 'react';

import styles from '@/layouts/BasicLayout/components/Footer.less';

function Footer(props) {
  return (
    <section>
      <div className={`container-fluid ${styles.footer}`}>
        <p>
          <span>SoupCraft is powered by</span>
          <a href="https://github.com/nestjs/nest" target='_blank'>Next.js</a>
          <span>and</span>
          <a href="https://github.com/umijs/umi" target='_blank'>umi</a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
