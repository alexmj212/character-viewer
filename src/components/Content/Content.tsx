import React from 'react';
import styles from './Content.module.scss';
import Character from '../Character/Character';

class Content extends React.Component {
    render() {
        return (
            <article className={styles.content}>
                <Character />
            </article>
        )
    }
}

export default Content
