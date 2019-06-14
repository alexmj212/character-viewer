import React from 'react';
import styles from './Skills.module.scss';

class Skills extends React.Component {
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
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>WIS</td>
                            <td>Animal Handling</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>INT</td>
                            <td>Arcana</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>STR</td>
                            <td>Athletics</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>CHA</td>
                            <td>Deception</td>
                            <td>1</td>

                        </tr>
                        <tr>
                            <td>*</td>
                            <td>INT</td>
                            <td>History</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>WIS</td>
                            <td>Insight</td>
                            <td>0</td>

                        </tr>
                        <tr>
                            <td>*</td>
                            <td>CHA</td>
                            <td>Intimidation</td>
                            <td>1</td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>INT</td>
                            <td>Investigation</td>
                            <td>1</td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>WIS</td>
                            <td>Medicine</td>
                            <td>0</td>

                        </tr>
                        <tr>
                            <td>*</td>
                            <td>INT</td>
                            <td>Nature</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>WIS</td>
                            <td>Perception</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>CHA</td>
                            <td>Performance</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>CHA</td>
                            <td>Persuasion</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>INT</td>
                            <td>Religion</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>DEX</td>
                            <td>Sleight of Hand</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>*</td>
                            <td>DEX</td>
                            <td>Stealth</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>WIS</td>
                            <td>Survival</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Skills
