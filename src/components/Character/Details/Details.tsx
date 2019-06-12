import React from 'react';
import styles from './Details.module.scss';

import Actions from '../Actions/Actions';
import Stats from '../Stats/Stats';
import Skills from '../Skills/Skills';

class Details extends React.Component {
    render() {
        return (
            <div className={styles.details}>
                <h2>Details</h2>
                <Stats />
                <Actions />
                <Skills />
            </div>
        )
    }
}

export default Details
