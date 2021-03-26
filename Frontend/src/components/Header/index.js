import React from 'react';
import AuthMenu from '../AuthMenu';
import styles from './Header.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
        <h3 className={styles.title}> Leboncoin messanger </h3>
        <div className={styles.container}>
        <AuthMenu />
        </div>
        </div> 
    </header>
)

export default Header;