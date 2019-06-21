import React from 'react';
import styles from './Skills.module.scss';
import { BaseStats } from '../../../interfaces/Stats.interface';

class Skills extends React.Component<BaseStats> {

    calcModifier(stat: number): string {
        let value = Math.floor((stat - 10) / 2);
        return value > 0 ? '+' + value.toString() : value.toString();
    }

    render() {
        return (
            <div className={styles.skills}>
                <h3>Skills</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Prof</th>
                            <th>Mod</th>
                            <th>Skill</th>
                            <th>Bonus</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td></td>
                            <td>DEX</td>
                            <td>Acrobatics</td>
                            <td>{ this.calcModifier(this.props.DEX) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>WIS</td>
                            <td>Animal Handling</td>
                            <td>{ this.calcModifier(this.props.WIS) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>INT</td>
                            <td>Arcana</td>
                            <td>{ this.calcModifier(this.props.INT) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>STR</td>
                            <td>Athletics</td>
                            <td>{ this.calcModifier(this.props.STR) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>CHA</td>
                            <td>Deception</td>
                            <td>{ this.calcModifier(this.props.CHA) }</td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>INT</td>
                            <td>History</td>
                            <td>{ this.calcModifier(this.props.INT) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>WIS</td>
                            <td>Insight</td>
                            <td>{ this.calcModifier(this.props.WIS) }</td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>CHA</td>
                            <td>Intimidation</td>
                            <td>{ this.calcModifier(this.props.CHA) }</td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>INT</td>
                            <td>Investigation</td>
                            <td>{ this.calcModifier(this.props.INT) }</td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>WIS</td>
                            <td>Medicine</td>
                            <td>{ this.calcModifier(this.props.WIS) }</td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>INT</td>
                            <td>Nature</td>
                            <td>{ this.calcModifier(this.props.INT) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>WIS</td>
                            <td>Perception</td>
                            <td>{ this.calcModifier(this.props.WIS) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>CHA</td>
                            <td>Performance</td>
                            <td>{ this.calcModifier(this.props.CHA) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>CHA</td>
                            <td>Persuasion</td>
                            <td>{ this.calcModifier(this.props.CHA) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>INT</td>
                            <td>Religion</td>
                            <td>{ this.calcModifier(this.props.INT) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>DEX</td>
                            <td>Sleight of Hand</td>
                            <td>{ this.calcModifier(this.props.DEX) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>DEX</td>
                            <td>Stealth</td>
                            <td>{ this.calcModifier(this.props.DEX) }</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>WIS</td>
                            <td>Survival</td>
                            <td>{ this.calcModifier(this.props.WIS) }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Skills
