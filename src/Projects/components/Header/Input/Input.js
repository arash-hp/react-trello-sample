import React, { Component } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

export default class Input extends Component {
    render() {
        const {className} = this.props;
        return (
            <div className={clsx(className, styles.root)}>
                <input className={styles.input} type='text' placeholder='Search'/>
                <i className="fas fa-search"></i>
            </div>
        )
    }
}
