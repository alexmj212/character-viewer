import React from 'react';
import styles from './Basic.module.scss';

import Stats from '../Stats/Stats';

class Basic extends React.Component {
    render() {
        return (
            <div className={`${styles.sheetModule} ${styles.basic}`}>
                <h2>Basic Info</h2>
                <Stats />
            </div>
        )
    }
}

export default Basic
