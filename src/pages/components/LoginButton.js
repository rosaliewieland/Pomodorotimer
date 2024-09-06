import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import styles from '../../styles/Loginbutton.module.css'; // Import CSS Module

const Loginbutton = () => {
  return (
    <div className={styles['right-button-container']}>
      <Link href="/Login" className={styles['button-wrapper']}>
        Login

        <img src='/Login.svg' className={styles['logo']} alt="Logo" />

      </Link>
    </div>
  );
};

export default Loginbutton;
