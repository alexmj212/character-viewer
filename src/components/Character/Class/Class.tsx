import React from 'react';
import styles from './Class.module.scss';
import { BaseClassInterface } from '../../../interfaces/Class.interface';

class BaseClass extends React.Component<BaseClassInterface> {

    render() {

        return (
            <div className={`${styles.sheetModule} ${styles.class}`}>
                <h2>Class</h2>
                <h3>{this.props.name}</h3>
                <div className={styles.data}>
                    <div className={styles.description}>
                        <p>{ this.props.description }</p>
                    </div>
                    <div className={styles.info}>
                        <dl>
                            <dt>Hit Die</dt><dd>d{this.props.hitDie}</dd>
                            <dt>Primary Abilities</dt><dd>{this.props.primaryAbility.join(', ')}</dd>
                            <dt>Saves</dt><dd>{this.props.saves.join(', ')}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseClass
