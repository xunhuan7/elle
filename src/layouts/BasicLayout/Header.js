import React from 'react';
import Route from 'umi/Route';
import Link from 'umi/link';

import styles from '@/layouts/BasicLayout/Header.less';

import Particles from 'react-particles-js';

import SectionBlog from '@/layouts/BasicLayout/SectionBlog';
import SectionEvents from '@/layouts/BasicLayout/SectionEvents';

function Header(props) {
  return (
    <section className={styles.section}>
      <nav className="container">
        <ul>
          <li><img src="https://summit-img.geekpark.net/ifx/her/soupcraft-logo--web-white-text.svg" alt="soupCraft"/></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <div className={styles.right}>
          Login
        </div>
      </nav>
      <div className='container'>
        <div className={styles.panel}>
          <Route>
            <Route path='/blog' component={SectionBlog}/>
            <Route path='/events' component={SectionEvents}/>
          </Route>
        </div>
      </div>
      <div className={styles.canvas}>
        <Particles/>
      </div>
    </section>
  );
};

export default Header;
