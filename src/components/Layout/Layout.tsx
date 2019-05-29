import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

class Layout extends React.Component {
    render() {
        return (
            <div className={styles.layout}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default Layout
