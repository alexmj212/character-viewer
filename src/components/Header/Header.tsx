import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <ul>
                    <li>
                        <a href="https://alexmj212.dev/">alexmj212</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header
