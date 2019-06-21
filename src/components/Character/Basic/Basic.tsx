import React from 'react';
import styles from './Basic.module.scss';

import Stats from '../Stats/Stats';
import { BaseStats } from '../../../interfaces/Stats.interface';
import { BaseClassInterface } from '../../../interfaces/Class.interface';

export interface BasicProps {
    baseStats: BaseStats;
    baseClass: BaseClassInterface;
}

class Basic extends React.Component<BasicProps> {
    render() {
        return (
            <div className={`${styles.sheetModule} ${styles.basic}`}>
                <h2>Basic Info</h2>
                <Stats { ...{ baseStats: this.props.baseStats, baseClass: this.props.baseClass } }/>
            </div>
        )
    }
}

export default Basic
