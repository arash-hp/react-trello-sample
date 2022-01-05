import React, { Component } from 'react';
import styles from './Content.module.scss';
import clsx from 'clsx';
import Column from './Column/Column';
import { Popup } from './Popup/Popup';
import { TaskStatus } from '../../constants';


export default class Content extends Component {
    // state = {
    //     modalOpen: false,
    //     tasks: [
    //         {
    //             title: 'Design', startDate: new Date(), endDate: new Date(), description: 'While this code may answer the question, providing additional context regarding how and/or why it solves the problem would improve the answer\'s long-term value.', id: 0, status: TaskStatus.todo
    //         },
    //         {
    //             title: 'Development', startDate: new Date(), endDate: new Date(), description: 'While this code may answer the question, providing additional context regarding how and/or why it solves the problem would improve the answer\'s long-term value.', id: 1, status: TaskStatus.todo
    //         },
    //         {
    //             title: 'Deploy-done', startDate: new Date(), endDate: new Date(), description: 'While this code may answer the question, providing additional context regarding how and/or why it solves the problem would improve the answer\'s long-term value.', id: 2, status: TaskStatus.completed
    //         },
    //         {
    //             title: 'Deploy', startDate: new Date(), endDate: new Date(), description: 'While this code may answer the question, providing additional context regarding how and/or why it solves the problem would improve the answer\'s long-term value.', id: 3, status: TaskStatus.completed
    //         }
    //     ]
    // }

    constructor() {
        super()
        const item = localStorage.getItem('task');
        const tasks = item ? JSON.parse(item) : [];
        this.state = {
            modalOpen: false,
            tasks
        }
    }

    addTask = (status) => {
        this.setState({ initialValues: { status }, modalOpen: true });
    }

    onSubmit = (task) => {
        this.setState((prev) => {
            task.id = prev.tasks.length
            task.startDate = new Date().toLocaleDateString()
            return {
                tasks: [task, ...prev.tasks],
                modalOpen: false,
                initialValues: undefined
            }
        }, this.updateLocalStorage)

    }

    onCardNext = (id) => {
        const task = this.state.tasks.find(item => item.id === id)
        if (!task) { return }
        if (task.status === TaskStatus.todo) {
            task.status = TaskStatus.inProgress
        } else if (task.status === TaskStatus.inProgress) {
            task.status = TaskStatus.completed
        }

        this.setState({
            tasks: this.state.tasks.map((item) => {
                return item.id === id ? task : item;
            })
        }, this.updateLocalStorage)
    }

    onPrevCard = (id) => {
        const task = this.state.tasks.find(item => item.id === id)
        if (!task) { return }
        if (task.status === TaskStatus.completed) {
            task.status = TaskStatus.inProgress
        } else if (task.status === TaskStatus.inProgress) {
            task.status = TaskStatus.todo
        }

        this.setState({
            tasks: this.state.tasks.map((item) => {
                return item.id === id ? task : item;
            })
        }, this.updateLocalStorage)
    }

    onDeleteCard = (id) => {
        this.setState({
            tasks : this.state.tasks.filter((item) => {
                return item.id !== id;
            })
        }, this.updateLocalStorage)
    }

    updateLocalStorage = () => { localStorage.setItem('task', JSON.stringify(this.state.tasks)) };

    render() {
        const { className } = this.props;
        const { tasks, modalOpen, initialValues } = this.state;


        return (
            <div className={clsx(className, styles.root)}>
                <h1>Projects</h1>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <Column
                            items={tasks.filter(item => item.status === TaskStatus.todo)}
                            title='Todo'
                            status={TaskStatus.todo}
                            onAdd={this.addTask}
                            onNext={this.onCardNext}
                            onPrev={this.onPrevCard}
                            onDelete={this.onDeleteCard} />
                    </div>
                    <div className={styles.card}>
                        <Column
                            items={tasks.filter(item => item.status === TaskStatus.inProgress)}
                            title='In Progress'
                            status={TaskStatus.inProgress}
                            onAdd={this.addTask}
                            onNext={this.onCardNext}
                            onPrev={this.onPrevCard}
                            onDelete={this.onDeleteCard} />
                    </div>
                    <div className={styles.card}>
                        <Column
                            items={tasks.filter(item => item.status === TaskStatus.completed)}
                            title='Completed'
                            status={TaskStatus.completed}
                            onAdd={this.addTask}
                            onPrev={this.onPrevCard}
                            onDelete={this.onDeleteCard} />
                    </div>

                    {modalOpen && <Popup initialValues={initialValues} onSave={this.onSubmit} />}

                </div>
            </div>
        )
    }
}

