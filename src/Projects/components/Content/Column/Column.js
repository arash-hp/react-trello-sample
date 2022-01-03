import React, { Component } from 'react';
import styles from './Column.module.scss';
import { Card } from '../Card/Card';

export default class Column extends Component {
    onAdd = () => {
        this.props.onAdd(this.props.status);

    }
    render() {
        const { title, items, onNext, onPrev, onDelete } = this.props;

        return (
            <div className={styles.root}>
                <div className={styles.card}>
                    <div className={styles.head}>
                        <h4>{title}</h4>
                        <span>{items.length}</span>
                    </div>
                    <button onClick={this.onAdd}>+</button>
                </div>
                {items.map(item => <Card onNext={onNext} onPrev={onPrev} onDelete={onDelete} key={item.id} item={item} />)}
            </div>
        )
    }
}
