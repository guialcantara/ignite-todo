import { useState } from 'react'
import styles from './TaskList.module.css'
import { TaskListItem } from './TaskListItem'
import { v4 as uuidv4 } from 'uuid'
import { NewTask } from './NewTask'

import clipboard from '../assets/Clipboard.svg'

interface Task {
    id: string;
    title: string;
    isDone: boolean;
}


export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([])

    function toggleTaskDone(id: string) {
        var newTasks = tasks.map(task => {
            if (task.id == id) {
                task.isDone = !task.isDone
            }
            return task
        })

        setTasks(newTasks)
    }

    function createNewTask(title: string) {
        setTasks(state => [...state, {
            id: uuidv4(),
            title: title,
            isDone: false
        }])
    }

    function deleteTask(id: string) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const tasksDone: number = tasks.reduce((total, task) => {
        return task.isDone ? total += 1 : total
    }, 0)

    return (
        <div className={styles.taskListContainer}>
            <NewTask createNewTask={createNewTask} />
            <header className={styles.taskListHeader}>
                <p>Tarefas criadas <span>{tasks.length}</span></p>
                <p>Concluídas <span>{tasksDone} de {tasks.length}</span></p>
            </header>
            {tasks.length > 0 ? (
                <ul className={styles.taskList}>
                    {tasks.map(task => (
                        <TaskListItem
                            key={task.id}
                            id={task.id}
                            toggleTaskDone={toggleTaskDone}
                            deleteTask={deleteTask}
                            title={task.title}
                            isDone={task.isDone}
                        />
                    ))}
                </ul>) :
                (
                    <div className={styles.emptyListContainer}>
                        <img src={clipboard} width={56} alt="" />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                )
            }
        </div>
    )
}