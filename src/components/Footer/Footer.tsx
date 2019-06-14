import React from 'react';
import styles from './Footer.module.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <a target="_blank" href="https://github.com/alexmj212">alexmj212</a>
            </footer>
        )
    }
}

export default Footer
