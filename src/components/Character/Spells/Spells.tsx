import React from 'react';
import styles from './Spells.module.scss';

class Spells extends React.Component {
    render() {
        return (
            <div className={styles.spells}>
                <h3>Spells</h3>
                <ul>
                    <li>Spell</li>
                    <li>Spell</li>
                    <li>Spell</li>
                    <li>Spell</li>
                </ul>
            </div>
        )
    }
}

export default Spells
