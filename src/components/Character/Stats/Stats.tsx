import React from 'react';
import styles from './Stats.module.scss';

class Stats extends React.Component {

    randomStat(abilityName: string) {
        let stat = (Math.floor(Math.random() * 20));
        let modifier = Math.floor((stat - 10)/2);
        return (
            <div className={styles.value}>
                <div className={styles.score}>
                    <div className={styles.type}>
                        { abilityName }
                    </div>
                    <div className={styles.stat}>
                        { stat }
                    </div>
                </div>
                <div className={styles.modifier}>
                    { modifier > 0 ? '+' + modifier : modifier }
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className={styles.stats}>
                <div className={styles.group}>
                    { this.randomStat('STR') }
                    { this.randomStat('DEX') }
                    { this.randomStat('CON') }
                    { this.randomStat('WIS') }
                    { this.randomStat('INT') }
                    { this.randomStat('CHA') }
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
                            <div className={styles.stat}>
                                +2
                            </div>
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                Initiative
                            </div>
                            <div className={styles.stat}>
                                +2
                            </div>
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                Armor Class
                            </div>
                            <div className={styles.stat}>
                                20
                            </div>
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
