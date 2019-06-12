import React from 'react';
import styles from './Character.module.scss';
import Details from './Details/Details';
import Backstory from './Backstory/Backstory'

class Character extends React.Component {
    render() {
        return (
            <section className={styles.character}>
                <div className={styles.name}>
                    <h1>Character Name</h1>
                </div>
                <div className={styles.info}>
                    <Details />
                    <Backstory />
                </div>
            </section>
        )
    }
}

export default Character
