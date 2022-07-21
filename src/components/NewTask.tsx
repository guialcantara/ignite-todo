import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from './NewTask.module.css';


export function NewTask(props: any) {
    const [newTask, setNewTask] = useState("");

    function createNewTask() {
        if (newTask) {
            props.createNewTask(newTask);
            setNewTask("");
        }
    }

    return (
        <div className={styles.newTask}>
            <input onChange={e => setNewTask(e.target.value)} value={newTask} type="text" placeholder="Adicione uma nova tarefa" className={styles.inputNewTask} />
            <button onClick={createNewTask} className={styles.btnNewTask}>Criar  <PlusCircle size={24} /> </button>
        </div>
    )
}