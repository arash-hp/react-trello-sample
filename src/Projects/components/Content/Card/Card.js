import React, { Component } from 'react';
import styles from './Card.module.scss';
import Avatar from '../../../../Image/chat-avatar.svg';
import { TaskStatus } from '../../../constants';


export class Card extends Component {
    onNext = () => {
        const { id } = this.props.item
        this.props.onNext(id)
    }
    onPrev = () => {
        const {id} = this.props.item
        this.props.onPrev(id)
    }
    onDelete=() => {
        const {id} = this.props.item
        this.props.onDelete(id)
    }
    render() {
        const { title, startDate, endDate, description, status } = this.props.item
        const isDone = (status === TaskStatus.completed);
        const isTodo = (status ===  TaskStatus.todo);

        return (
            <div className={styles.root}>
                <div className={styles.title}>
                    <h4>{title}<i  onClick={this.onDelete} className="fas fa-trash-alt"></i></h4>
                </div>
                <div>
                    <h5>Date : (start:{startDate.toString()})(end:{endDate.toString()})</h5>
                </div>
                <p>{description}</p>
                <figure><img src={Avatar}></img><span>{!isTodo && <i onClick={this.onPrev} className="far fa-minus"></i>}{!isDone && <i onClick={this.onNext} className="far fa-check"></i>}</span></figure>
            </div >
        )
    }
}
