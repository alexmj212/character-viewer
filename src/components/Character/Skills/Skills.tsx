import React from 'react';
import styles from './Skills.module.scss';

class Skills extends React.Component {
    render() {
        return (
            <div className={styles.skills}>
                <h3>Skills</h3>
                <ul>
                    <li>Skill</li>
                    <li>Skill</li>
                    <li>Skill</li>
                    <li>Skill</li>
                </ul>
            </div>
        )
    }
}

export default Skills
