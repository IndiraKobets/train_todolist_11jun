import React, {useState} from 'react';
import './App.css';


function TodoCreateForm(props) {
const [task, setTask] = useState('');

const addTask = () => {
    console.log(task);
    props.onTaskCreate(task);
    setTask("");

}

  return (
    <div className="TodoCreateForm" >
        <div className="input-group mb-3" style={{padding:"20px"}}>
            <input value={task} onChange={e => setTask(e.target.value)} type="text" className="form-control"
                   placeholder="Add Todo"
                   aria-label="Add Todo" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button onClick={addTask} disabled={task.trim() === ''} className="btn btn-primary" type="button" id="button-addon2">Add Task</button>
                </div>
        </div>



    </div>
  );
}

export default TodoCreateForm;
