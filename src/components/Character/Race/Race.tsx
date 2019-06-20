import React from 'react';
import styles from './Race.module.scss';

class Race extends React.Component {
    render() {
        return (
            <div className={`${styles.sheetModule} ${styles.race}`}>
                <h2>Race</h2>
            </div>
        )
    }
}

export default Race
