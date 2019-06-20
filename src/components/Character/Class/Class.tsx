import React from 'react';
import styles from './Class.module.scss';
import { BaseClassInterface } from '../../../interfaces/class.interface';
import BaseClasses from '../../../data/baseClasses';

class Class extends React.Component {

    private classData: BaseClassInterface;

    constructor(props: any) {
        super(props);
        this.classData = new BaseClasses().classes()[this.randomBaseClass()];
    }

    render() {
        return (
            <div className={`${styles.sheetModule} ${styles.class}`}>
                <h2>Class</h2>
                <h3>{this.classData.name}</h3>
                <div className={styles.data}>
                    <div className={styles.description}>
                        <p>{this.classData.description}</p>
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>Hit Die</dt><dd>{this.classData.hitDie}</dd>
                            <dt>Primary Abilities</dt><dd>{this.classData.primaryAbility.join(', ')}</dd>
                            <dt>Saves</dt><dd>{this.classData.saves.join(', ')}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }

    randomBaseClass() {
        return Math.floor(Math.random() * new BaseClasses().classes().length);
    }
}

export default Class
