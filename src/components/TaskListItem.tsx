import { Trash } from "phosphor-react";
import styles from './TaskListItem.module.css'

interface TaskItemProps{
    id: string;
    title: string;
    isDone: boolean;
    toggleTaskDone: (id: string) => void;
    deleteTask: (id: string) => void;
}

export function TaskListItem(props: TaskItemProps) {

    return (
        <li className={styles.taskListItem}  >
            <label className={styles.container} >
                <input type="checkbox" onChange={() => props.toggleTaskDone(props.id)} checked={props.isDone}/>
                <p>{props.title}</p>
                <span className={styles.checkmark}></span>
            </label>
            <Trash className={styles.trash} onClick={() => props.deleteTask(props.id)} size={24} />
        </li>
    )
}