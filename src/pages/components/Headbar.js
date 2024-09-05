// components/Headbar.js
import React from 'react';
import styles from '../../styles/Headbar.module.css'; // Import CSS Module

const Headbar = () => {
  return (
    <header className={styles.header}>
 
            <nav className={styles.nav}>

                <div className={styles['logo-container']}>
                    <button className={styles['logo-button']} onClick={() => handleScroll("home")}> <img src='../../../Pomodoro.svg' className={styles['logo']} alt="Logo" /></button>
                    
               
                </div>

                <ul className={styles.menu}>
                <li className={styles['menu-item']}><a href="../">Settings</a></li>
                <li className={styles['menu-item']}><a href="#">login</a></li>
                <li className={styles['menu-item']}><a href="#">Contact</a></li>
                </ul>
            </nav>
         
    </header>
    
  );
};

export default Headbar;
