import './App.css'
import { addTask, removeTask, updateTask, getTasksName } from '../../../Backend/ListManager';



function App() {
    return (
        <div className="App">
            <p>{getTasksName("2") }</p>
        </div>
    )
}

export default App;
