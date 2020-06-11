import React, {useState} from 'react';
import './App.css';


function TodoList(props) {

     const [taskEdit, setTaskEdit] = useState({});

     const editMode = (task) => {
         setTaskEdit(task)
     };

     const onEditTaskChange = (e) => {
          setTaskEdit({...taskEdit, name: e.target.value})
     };

     const taskSave = (task) => {
         props.onTaskSave(taskEdit);
         setTaskEdit({});
     };

  return (
    <div className="TodoList" >

        <ul className="list-group" >
            {props.todos.map(el => <li key={el.id} className="list-group-item"
            >

                {
                    taskEdit.id === el.id
                      ? <>
                        <input type="text" value={taskEdit.name} onChange={onEditTaskChange}/>
                        <button onClick={taskSave} disabled={!taskEdit.name.trim()}>Save</button>

                      </>
                      : <span onClick={() => editMode(el)}>{el.name}</span>
                }
            {el.done ? '✅' : null}
            <button onClick={() => props.onTaskDoneToggle(el.id)}>
                {el.done ? 'Undone' : 'Done'}
            </button>

            <button onClick={() => props.onTaskDelete(el.id)} >🗑️</button>

            </li>)
            }
        </ul>
    </div>
  );
}

export default TodoList;
