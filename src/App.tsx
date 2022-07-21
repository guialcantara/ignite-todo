import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import './global.css';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <TaskList />
    </div>
  )
}

export default App
