import React from 'react';
import styles from './Character.module.scss';
import Details from './Details/Details';
import Backstory from './Backstory/Backstory'
import Basic from './Basic/Basic';

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
                        <div className={styles.sheetModule}>
                            <h2>Race</h2>
                        </div>
                        <div className={styles.sheetModule}>
                            <h2>Class</h2>
                        </div>
                        <Backstory />
                    </div>
                </div>
            </section>
        )
    }
}

export default Character
