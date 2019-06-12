import React from 'react';
import styles from './Stats.module.scss';

class Stats extends React.Component {
    render() {
        return (
            <div className={styles.stats}>
                <div className={styles.value}>
                    <div className={styles.score}>
                        <div className={styles.type}>
                            STR
                            </div>
                        20
                        </div>
                    <div className={styles.modifier}>
                        +5
                        </div>
                </div>
                <div className={styles.value}>
                    <div className={styles.score}>
                        <div className={styles.type}>
                            DEX
                            </div>
                        20
                        </div>
                    <div className={styles.modifier}>
                        +5
                        </div>
                </div>
                <div className={styles.value}>
                    <div className={styles.score}>
                        <div className={styles.type}>
                            CON
                            </div>
                        20
                        </div>
                    <div className={styles.modifier}>
                        +5
                        </div>
                </div>
                <div className={styles.value}>
                    <div className={styles.score}>
                        <div className={styles.type}>
                            INT
                            </div>
                        20
                        </div>
                    <div className={styles.modifier}>
                        +5
                        </div>
                </div>
                <div className={styles.value}>
                    <div className={styles.score}>
                        <div className={styles.type}>
                            WIS
                            </div>
                        20
                        </div>
                    <div className={styles.modifier}>
                        +5
                        </div>
                </div>
                <div className={styles.value}>
                    <div className={styles.score}>
                        <div className={styles.type}>
                            CHA
                            </div>
                        20
                        </div>
                    <div className={styles.modifier}>
                        +5
                        </div>
                </div>
            </div>
        )
    }
}

export default Stats
