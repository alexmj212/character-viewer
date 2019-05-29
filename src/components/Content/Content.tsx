import React from 'react';
import styles from './Content.module.scss';

class Content extends React.Component {
    render() {
        return (
            <section className={styles.content}>
                Hello Content
            </section>
        )
    }
}

export default Content
