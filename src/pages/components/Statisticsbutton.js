import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import styles from '../../styles/Statisticsbutton.module.css'; // Import CSS Module

const Statisticsbutton = () => {
  return (
    <div className={styles['left-button-container']}>
      <Link href="/Settings" className={styles['button-wrapper']}>
        Statistics

        <img src='/Settings.svg' className={styles['logo']} alt="Logo" />
      </Link>
      
    </div>
  );
};

export default Statisticsbutton;