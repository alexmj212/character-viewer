import React from 'react';
import styles from './Stats.module.scss';
import { BaseStats } from '../../../interfaces/Stats.interface';
import { AbilitiesAbrv } from '../../../enums/Abilites.enum';
import { BaseClassInterface } from '../../../interfaces/Class.interface';

export interface StatsProps {
    baseStats: BaseStats;
    baseClass: BaseClassInterface;
}

class Stats extends React.Component<StatsProps> {

    calcModifier(stat: number): string {
        let value = Math.floor((stat - 10) / 2);
        return value > 0 ? '+' + value.toString() : value.toString();
    }

    render() {
        return (
            <div className={styles.stats}>
                <div className={styles.group}>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                {AbilitiesAbrv.STR}
                            </div>
                            <div className={styles.stat}>
                                {this.props.baseStats.STR}
                            </div>
                        </div>
                        <div className={styles.modifier}>
                            {this.calcModifier(this.props.baseStats.STR)}
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                {AbilitiesAbrv.DEX}
                            </div>
                            <div className={styles.stat}>
                                {this.props.baseStats.DEX}
                            </div>
                        </div>
                        <div className={styles.modifier}>
                            {this.calcModifier(this.props.baseStats.DEX)}
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                {AbilitiesAbrv.CON}
                            </div>
                            <div className={styles.stat}>
                                {this.props.baseStats.CON}
                            </div>
                        </div>
                        <div className={styles.modifier}>
                            {this.calcModifier(this.props.baseStats.CON)}
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                {AbilitiesAbrv.WIS}
                            </div>
                            <div className={styles.stat}>
                                {this.props.baseStats.WIS}
                            </div>
                        </div>
                        <div className={styles.modifier}>
                            {this.calcModifier(this.props.baseStats.WIS)}
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                {AbilitiesAbrv.INT}
                            </div>
                            <div className={styles.stat}>
                                {this.props.baseStats.INT}
                            </div>
                        </div>
                        <div className={styles.modifier}>
                            {this.calcModifier(this.props.baseStats.INT)}
                        </div>
                    </div>
                    <div className={styles.value}>
                        <div className={styles.score}>
                            <div className={styles.type}>
                                {AbilitiesAbrv.CHA}
                            </div>
                            <div className={styles.stat}>
                                {this.props.baseStats.CHA}
                            </div>
                        </div>
                        <div className={styles.modifier}>
                            {this.calcModifier(this.props.baseStats.CHA)}
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
                            <div className={styles.complexGroup}>d{this.props.baseClass.hitDie}</div>
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
                                { this.calcModifier(this.props.baseStats.DEX) }
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
