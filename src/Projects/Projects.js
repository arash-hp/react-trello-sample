import React, { Component } from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './Projects.module.scss';


export class Projects extends Component {

    render() {
        return (
            <div className={styles.root}>
                <Sidebar className={styles.sidebar} />
                <div className={styles.container}>
                    <Header items={[1, 2]} title='ProjectHeader' className={styles.header} />
                    <Content className={styles.content} />
                </div>
            </div>
        )
    }
}
