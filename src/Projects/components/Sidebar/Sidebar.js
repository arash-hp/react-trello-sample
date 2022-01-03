import React, { Component } from 'react';
import styles from './Sidebar.module.scss';
import clsx from 'clsx';

export default class Sidebar extends Component {
    render() {
        const {className} = this.props;
        return (
            <div className={clsx(className, styles.root)}>
                <h2>.studio</h2>
                <ul>
                    <li><i className="fas fa-home-lg-alt"></i>Overview</li>
                    <li><i className="far fa-chart-bar"></i>State</li>
                    <li><i className="fas fa-folder-open"></i>Projects</li>
                    <li><i className='far fa-comment-dots'></i>Chat</li>
                    <li><i className="fas fa-calendar-alt"></i>Calendar</li>
                </ul>
                <ul>
                    <li><i className="fas fa-cog"></i>Settings</li>
                    <li><i className="fal fa-sign-out-alt"></i>Log out</li>
                </ul>

            </div>
        )
    }
}
