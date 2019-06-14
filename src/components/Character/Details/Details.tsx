import React from 'react';
import styles from './Details.module.scss';

import Actions from '../Actions/Actions';
import Skills from '../Skills/Skills';
import Spells from '../Spells/Spells';

class Details extends React.Component {
    render() {
        return (
            <div className={`${styles.sheetModule} ${styles.details}`}>
                <h2>Details</h2>
                <Actions />
                <Skills />
                <Spells />
            </div>
        )
    }
}

export default Details
