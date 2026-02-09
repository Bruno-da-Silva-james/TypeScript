import './App.css'
import { useEffect, useState } from 'react';

export default function App() {
    const [task, setTask] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/tasks')
            .then(res => res.json())
            .then(data => {
                if (data && Array.isArray(data.tasks) && data.tasks.length > 0) {
                    // adjust according to your table column name
                    setTask(String(data.tasks[0].nometask ?? JSON.stringify(data.tasks[0])));
                } else {
                    setTask('no tasks');
                }
            })
            .catch(() => setTask('error'));
    }, []);

    return (
        <div className="App">
            <h1>teste</h1>
            <h1>{task}</h1>
        </div>
    )
}

