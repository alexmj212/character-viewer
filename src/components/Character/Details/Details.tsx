import React from 'react';
import styles from './Details.module.scss';

import Actions from '../Actions/Actions';
import Skills from '../Skills/Skills';
import Spells from '../Spells/Spells';
import { BaseStats } from '../../../interfaces/Stats.interface';

class Details extends React.Component<BaseStats> {
    render() {
        return (
            <div className={`${styles.sheetModule} ${styles.details}`}>
                <h2>Details</h2>
                <Actions />
                <Skills { ...this.props } />
                <Spells />
            </div>
        )
    }
}

export default Details
