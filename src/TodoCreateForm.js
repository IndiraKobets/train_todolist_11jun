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
        <ul className="list-group"  style={{padding:"20px"}}>

       <input type="text"  value={task} onChange={e => setTask(e.target.value)}/>
       <button  onClick={addTask} disabled={task.trim() === ''}>Add Task</button>

        </ul >
    </div>
  );
}

export default TodoCreateForm;
