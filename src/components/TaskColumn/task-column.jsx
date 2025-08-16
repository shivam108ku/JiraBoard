import React from 'react'
import "./task-column.css"
import TaskCard from '../TaskCard/TaskCard';

const TaskColumn = ({title , icon ,  tasks , status}) => {
    return (
        <div>
            <section className="task_Column">
                <h2 className='task_column_heading'>
                    <img src={icon} alt='' className='task_column_icon'></img>
                    {title}
                </h2>
                {
                tasks.map((task, index)=> 
                    task.status === status && 
                    <TaskCard key={index}
                    title={task.task}
                    tags={task.tags}
                    />)
                }                
            </section>
        </div>
    )
}

export default TaskColumn;