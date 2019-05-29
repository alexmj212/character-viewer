import React from 'react';
import './App.module.scss';
import Layout from './components/Layout/Layout';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.app}>
            <Layout />
        </div>
    );
}

export default App;
