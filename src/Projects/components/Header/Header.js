import React, { Component } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import Input from './Input/Input';

export default class Header extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={clsx(className, styles.root)}>

                <Input />
                <div className={styles.question}>
                <i className="fas fa-question"></i>
                </div>
                <i className="fas fa-bell"></i>
                <div className={styles.dropdown}>Arash-Hp<i className="fa fa-angle-down"></i></div>
                <i className="fas fa-user"></i>

                {/* {this.props.title}{this.props.items.length} */}
            </div>
        )
    }
}
