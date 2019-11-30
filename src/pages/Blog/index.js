/**
 * title: 博客
 */

import React from 'react';

import styles from './index.less';
import { connect } from 'dva';

class Blog extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className={styles.filterWrap}>
          <div className={styles.recent}>
            Recent Posts
          </div>
          <div className={styles.topics}>
            topics
          </div>
        </div>
        <div className={styles.articles}>
          <a className={styles.article}>
            <img
              src="https://zurb-dot-com-prod.s3.amazonaws.com/asset/604/raw_2F2ecf4b06-17c1-4a12-a76c-68f30b5298bd_2Finsight-large.gif"
              alt=""/>
            <h6>Jun 15, 2017</h6>
            <h4>
              Angular is a platform for building mobile and desktop web applications.
            </h4>
          </a>
          <a className={styles.article}>
            <img
              src="https://zurb-dot-com-prod.s3.amazonaws.com/asset/604/raw_2F2ecf4b06-17c1-4a12-a76c-68f30b5298bd_2Finsight-large.gif"
              alt=""/>
            <h6>Jun 15, 2017</h6>
            <h4>
              Angular is a platform for building mobile and desktop web applications.
            </h4>
          </a>
          <a className={styles.article}>
            <img
              src="https://zurb-dot-com-prod.s3.amazonaws.com/asset/604/raw_2F2ecf4b06-17c1-4a12-a76c-68f30b5298bd_2Finsight-large.gif"
              alt=""/>
            <h6>Jun 15, 2017</h6>
            <h4>
              Angular is a platform for building mobile and desktop web applications.
            </h4>
          </a>
          <a className={styles.article}>
            <img
              src="https://zurb-dot-com-prod.s3.amazonaws.com/asset/604/raw_2F2ecf4b06-17c1-4a12-a76c-68f30b5298bd_2Finsight-large.gif"
              alt=""/>
            <h6>Jun 15, 2017</h6>
            <h4>
              Angular is a platform for building mobile and desktop web applications.
            </h4>
          </a>
          <a className={styles.article}>
            <img
              src="https://zurb-dot-com-prod.s3.amazonaws.com/asset/604/raw_2F2ecf4b06-17c1-4a12-a76c-68f30b5298bd_2Finsight-large.gif"
              alt=""/>
            <h6>Jun 15, 2017</h6>
            <h4>
              Angular is a platform for building mobile and desktop web applications.
            </h4>
          </a>
          <a className={styles.article}>
            <img
              src="https://zurb-dot-com-prod.s3.amazonaws.com/asset/604/raw_2F2ecf4b06-17c1-4a12-a76c-68f30b5298bd_2Finsight-large.gif"
              alt=""/>
            <h6>Jun 15, 2017</h6>
            <h4>
              Angular is a platform for building mobile and desktop web applications.
            </h4>
          </a>
          <a className={styles.article}>
            <img
              src="https://zurb-dot-com-prod.s3.amazonaws.com/asset/604/raw_2F2ecf4b06-17c1-4a12-a76c-68f30b5298bd_2Finsight-large.gif"
              alt=""/>
            <h6>Jun 15, 2017</h6>
            <h4>
              Angular is a platform for building mobile and desktop web applications.
            </h4>
          </a>
          <a className={styles.article}>
            <img
              src="https://zurb-dot-com-prod.s3.amazonaws.com/asset/604/raw_2F2ecf4b06-17c1-4a12-a76c-68f30b5298bd_2Finsight-large.gif"
              alt=""/>
            <h6>Jun 15, 2017</h6>
            <h4>
              Angular is a platform for building mobile and desktop web applications.
            </h4>
          </a>
        </div>
      </div>

    );
  }

}

export default connect(({ blog: blogModel }) => ({
  name: blogModel.name,
}))(Blog);
