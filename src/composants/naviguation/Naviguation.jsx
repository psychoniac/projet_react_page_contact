import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import styles from './naviguation.module.css';
function Naviguation() {
    return (
        <nav className={styles.naviguation}>
            <a
                href='#'
                className='logo'
            >
                <AiOutlineWechat />
            </a>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>A propos</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Naviguation;
