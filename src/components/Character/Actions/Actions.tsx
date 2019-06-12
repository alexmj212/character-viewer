import React from 'react';
import styles from './Actions.module.scss';

class Actions extends React.Component {
    render() {
        return (
            <div className={styles.actions}>
                <h3>Actions</h3>
                <ul>
                    <li>Action</li>
                    <li>Action</li>
                    <li>Action</li>
                    <li>Action</li>
                </ul>
            </div>
        )
    }
}

export default Actions
