import React from 'react';
import styles from './Stats.module.scss';

class Stats extends React.Component {
    render() {
        return (
            <div className={styles.stats}>
                <div className={styles.group}>
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
                <div className={styles.group}>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                Hit Points
                            </div>
                            <div className={styles.complexGroup}>100/100</div>
                            <div className={styles.type}>
                                Hit Die
                            </div>
                            <div className={styles.complexGroup}>d6</div>
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                Proficiency
                            </div>
                            +2
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                Initiative
                            </div>
                            +2
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                Armor Class
                            </div>
                            20
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                Movement
                            </div>
                            <span className={styles.unitGroup}>30<span className={styles.unitName}>ft</span></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats
