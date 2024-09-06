import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import styles from '../../styles/Settingsbutton.module.css'; // Import CSS Module

const Settingsbutton = () => {
  return (
    <div className={styles['left-button-container']}>
      <Link href="/Settings" className={styles['button-wrapper']}>
        Settings

        <img src='/Settings.svg' className={styles['logo']} alt="Logo" />
      </Link>
      
    </div>
  );
};

export default Settingsbutton;
