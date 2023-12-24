import React from 'react';
import styles from './header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <h1>
                Contacter<span>nous</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                minima doloremque distinctio eligendi alias quibusdam dolore
                quis. Ullam, unde! Neque eaque magnam dolorum impedit dolores
                commodi.
            </p>
        </div>
    );
}

export default Header;
