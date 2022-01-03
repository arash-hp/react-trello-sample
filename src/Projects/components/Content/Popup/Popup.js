import React, { Component } from 'react';
import { TaskStatus } from '../../../constants';
import styles from './Popup.module.scss';

export class Popup extends Component {
    constructor(props) {
        super()
        this.state = {
            title: '',
            endDate: '',
            description: '',
            status: '',
            ...props.initialValues
        }
    }


    handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value)
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const task = this.state;
        this.props.onSave(task)
    }
    render() {

        return (
            <>
                <div className={styles.wrapper} />
                <div className={styles.root}>
                    <form onSubmit={this.onSubmit}>
                        <label>
                            Name:
                            <input type='text' name='title' placeholder='Add title for card' value={this.state.title} onChange={this.handleChangeInput} />
                        </label>
                        <label>
                            Date:
                            <input type='date' name='endDate' placeholder='Add a date for task' value={this.state.endDate}
                                onChange={this.handleChangeInput} />
                        </label>
                        <label>
                            Status:
                            <select name="status" value={this.state.status} onChange={this.handleChangeInput}>
                                <option>Please Choose</option>
                                <option value={TaskStatus.todo}>Todo</option>
                                <option value={TaskStatus.inProgress}>In progress</option>
                                <option value={TaskStatus.completed}>Completed</option>
                            </select>
                        </label>
                        <label>
                            Description:
                            <textarea name='description' placeholder='Add  more detailed description....' value={this.state.description} onChange={this.handleChangeInput} />
                        </label>
                        <input type='submit' value='Submit Card' />
                    </form>
                </div>
            </>
        )
    }
}
<input placeholder=''></input>