import React from 'react';

import styles from './PanelBlog.less';

class PanelBlog extends React.Component {

  render() {
    return (
      <section>
        <h1>The Knowledge Vault</h1>
        <p className={styles.description}>
          吾生有涯愿无尽，心期填海力移山
        </p>
        <div className={styles.searchWrap}>
          <p>Why not try searching? Just Do It!</p>
          <div className={`col-xs-12 col-sm-10 col-lg-5 ${styles.searchBox}`}>
            <input type="text" placeholder={'Like: kafka'}/>
            <a>Search</a>
          </div>
        </div>
      </section>
    );
  }

}

export default PanelBlog;
