/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { CiCircleCheck } from "react-icons/ci";
import { IoTrashBinSharp } from "react-icons/io5";
import './Todo.css'

const TodoItems = ({ task, deleteTask, completedTask }) => {
    return (
        <div className='tasks-container'>
            {task.map((item, index) => (
                <div key={index} id='tasks-item' style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                <div className='display-task'>
                {item.task}

                <CiCircleCheck  onClick={() => completedTask(index)} id={item.done ? 'checking' :'check'}>
                    {item.done ? 'Undo' : 'Complete'}
                </CiCircleCheck>
                <IoTrashBinSharp  onClick={() => deleteTask(index)} className='buttons' id='delete-icon'>Delete</IoTrashBinSharp>

                
                </div>
                   
                </div>
            ))}
        </div>
    );
}



export default TodoItems;
