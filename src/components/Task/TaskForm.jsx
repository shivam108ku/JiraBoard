import React from 'react'
import './task-form.css';

const TaskForm = () => {
  return (
    <header className='app_header'>
         <form action="">
           <input type="text"
             className='task-input'
             placeholder='Enter task Details'
          />
          <div className=''>
            <button className='tag'>Dev</button>
            <button className='tag'>QA</button>
            <button className='tag'>Product Owner</button>
          </div>

          <select className='task_status'>
            <option >Ready For Developemnt</option>
            <option >In Progress</option>
            <option >Ready For Test</option>
            <option >Closed</option>
          </select>

          <button type='submit' className='task_submit'>+ Add</button>
      </form>
    </header>
  )
}

export default TaskForm