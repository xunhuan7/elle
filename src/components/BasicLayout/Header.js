import React from 'react';
import Route from 'umi/Route';
import Link from 'umi/link';

import Particles from 'react-particles-js';

import styles from '@/components/BasicLayout/Header.less';

import PanelBlog from '@/components/Header/PanelBlog';
import SectionEvents from '@/components/Header/SectionEvents';

class Header extends React.Component {

  render() {
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
            <div className={styles.panelContent}>
              <Route>
                <Route exact path='/' component={PanelBlog}/>
                <Route path='/blog' component={PanelBlog}/>
                <Route path='/events' component={SectionEvents}/>
                <Route path='/about' component={SectionEvents}/>
                <Route path='/service' component={SectionEvents}/>
                <Route path='/work' component={SectionEvents}/>
              </Route>
            </div>
          </div>
        </div>
        <div className={styles.moonCurve}></div>
      </section>
    );
  }

}

export default Header;
