import React from 'react';
import styles from './Character.module.scss';
import Details from './Details/Details';
import Backstory from './Backstory/Backstory'
import Basic from './Basic/Basic';
import Race from './Race/Race';
import BaseClass from './Class/Class';

import BaseClasses from '../../data/baseClasses';
import { BaseClassInterface } from '../../interfaces/Class.interface';
import { BaseStats } from '../../interfaces/Stats.interface';

class Character extends React.Component {

    private baseClass: BaseClassInterface;
    private baseStats: BaseStats;

    constructor(props: any) {
        super(props);
        this.baseClass = this.randomBaseClass();
        this.baseStats = this.randomStats();
    }

    render() {
        return (
            <section className={styles.character}>
                <div className={styles.name}>
                    <h1>Character Name</h1>
                </div>
                <div className={styles.info}>
                    <div className={styles.col}>
                        <Basic { ...{ baseStats: this.baseStats, baseClass: this.baseClass} }/>
                        <Details { ...this.baseStats } />
                    </div>
                    <div className={styles.col}>
                        <Race />
                        <BaseClass { ...this.baseClass } />
                        <Backstory />
                    </div>
                </div>
            </section>
        )
    }

    randomBaseClass() {
        let rand = Math.floor(Math.random() * new BaseClasses().classes().length);
        return new BaseClasses().classes()[rand];
    }

    randomStats(): BaseStats {

        const randStat = () => { return Math.floor(Math.random() * 20) };

        return {
            STR: randStat(),
            DEX: randStat(),
            CON: randStat(),
            WIS: randStat(),
            INT: randStat(),
            CHA: randStat()
        } as BaseStats;
    }
}

export default Character
