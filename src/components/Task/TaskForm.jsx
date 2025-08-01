import React from 'react';

const TaskForm = () => {
  return (
    <header className='bg-white rounded-lg shadow p-4 mb-6'>
      <form className='flex flex-col gap-4 md:flex-row md:items-center md:gap-6'>
        {/* Task input */}
        <input
          type="text"
          className='flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Enter task details'
        />

        {/* Tag Buttons */}
        <div className='flex gap-2'>
          <button type='button' className='px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200'>Dev</button>
          <button type='button' className='px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200'>QA</button>
          <button type='button' className='px-3 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200'>Product Owner</button>
        </div>

        {/* Status Dropdown */}
        <select className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <option value="Ready For Development">Ready For Development</option>
          <option value="In Progress">In Progress</option>
          <option value="Ready For Test">Ready For Test</option>
          <option value="Closed">Closed</option>
        </select>

        {/* Submit Button */}
        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200'
        >
          + Add
        </button>
      </form>
    </header>
  );
};

export default TaskForm;
