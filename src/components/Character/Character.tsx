import React from 'react';
import styles from './Character.module.scss';
import Details from './Details/Details';
import Backstory from './Backstory/Backstory'
import Basic from './Basic/Basic';
import Race from './Race/Race';
import Class from './Class/Class';

class Character extends React.Component {
    render() {
        return (
            <section className={styles.character}>
                <div className={styles.name}>
                    <h1>Character Name</h1>
                </div>
                <div className={styles.info}>
                    <div className={styles.col}>
                        <Basic />
                        <Details />
                    </div>
                    <div className={styles.col}>
                        <Race />
                        <Class />
                        <Backstory />
                    </div>
                </div>
            </section>
        )
    }
}

export default Character
