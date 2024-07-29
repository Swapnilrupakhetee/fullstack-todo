import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItems from './TodoItems';

const Todo = () => {
    const[text,setText]=useState("")
    const[task,setTask]=useState([]);

    const addTask=()=>{
        if(text.length>0){
            setTask([...task,{task:text,done:false}])
        }
        setText("")
    }
    const deleteTask=(index)=>{
        const newTask=task.filter((value,indexTodo)=>{
            return indexTodo!==index
        })
        setTask(newTask)
    }
    const filterTask=(index)=>{
        const newTask=[...task].sort((a,b)=>a-b)
        setTask(newTask)
        
    }

    const completedTask =(index)=>{
        const newTask=[...task].map((value,indexTodo)=>{
            if(indexTodo===index){
                value.done=!value.done
            }
            return value
        })
        setTask(newTask)
    }
  return (
    <div>
    <div className='todo-container'>
       <div className='todo-title'>Write your todo's</div>
       <AddTodo
        text={text}
        addTask={addTask}
        setText={setText}
       />
       <TodoItems
        task={task}
        deleteTask={deleteTask}
        completedTask={completedTask}
       />


    </div>
      
    </div>
  );
}

export default Todo;
