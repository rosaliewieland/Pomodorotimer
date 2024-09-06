
import React from 'react';
import styles from '../../styles/Headbar.module.css'; 
import Settingsbutton from './Settingsbutton';
import Loginbutton from './LoginButton';
import Statisticsbutton from './Statisticsbutton';

const Headbar = () => {
  return (
    <header className={styles.header}>
    <div className={styles['header-container']}>
      <div className={styles['logo-container']}>
        <a href="/" className={styles['logo-button']}>
          <img src='/pomodoro.svg' className={styles['logo']} alt="Logo" />
        </a>
      </div>

      <div className={styles['menu-container']}>
        <Settingsbutton />
        <Statisticsbutton/>
        <Loginbutton />
      </div>
    </div>
  </header>
);
};



export default Headbar;
