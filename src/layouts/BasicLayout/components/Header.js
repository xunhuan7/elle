import React from 'react';
import Route from 'umi/Route';
import Link from 'umi/link';

import Particles from 'react-particles-js';

import styles from '@/layouts/BasicLayout/components/Header.less';

import SectionBlog from '@/layouts/BasicLayout/components/SectionBlog';
import SectionEvents from '@/layouts/BasicLayout/components/SectionEvents';

function Header() {
  return (
    <section className={styles.section}>
      <div className={styles.canvas}>
        <Particles/>
      </div>
      <nav className='container'>
        <ul>
          <li>
            <Link to='/'>
              <img src='https://summit-img.geekpark.net/ifx/her/soupcraft-logo--web-white-text.svg' alt='soupCraft'/>
            </Link>
          </li>
          <li><Link to='/work'>Work</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/events'>Events</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
        <div className={styles.right}>
          Login
        </div>
      </nav>
      <div className='container'>
        <div className={styles.panel}>
          <Route>
            <Route exact path='/' component={SectionBlog}/>
            <Route path='/blog' component={SectionBlog}/>
            <Route path='/events' component={SectionEvents}/>
            <Route path='/about' component={SectionEvents}/>
            <Route path='/service' component={SectionEvents}/>
            <Route path='/work' component={SectionEvents}/>
          </Route>
        </div>
      </div>
    </section>
  );
};

export default Header;
