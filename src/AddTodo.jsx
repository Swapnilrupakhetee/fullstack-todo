import React from 'react';

const AddTodo = ({text,addTask,setText}) => {
    console.log(text);

  return (
    <div>
    <input type='text' className='searching' placeholder='Add task to your todo list' value={text} onChange={(e)=>{
        setText(e.target.value);
    }}/>
    <button onClick={addTask} className='add-button'>Add Task</button>
      
    </div>
  );
}

export default AddTodo;
