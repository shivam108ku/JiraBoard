import TaskForm from './components/Task/TaskForm';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-center font-bold text-3xl mb-8 text-blue-700'>Jira Board</h1>
      
      <TaskForm />

      <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
        <section className='bg-white rounded-lg shadow p-4'>
          <h2 className='font-semibold text-lg mb-2'>To Do</h2>
          {/* Tasks for column 1 */}
        </section>
        <section className='bg-white rounded-lg shadow p-4'>
          <h2 className='font-semibold text-lg mb-2'>In Progress</h2>
          {/* Tasks for column 2 */}
        </section>
        <section className='bg-white rounded-lg shadow p-4'>
          <h2 className='font-semibold text-lg mb-2'>Review</h2>
          {/* Tasks for column 3 */}
        </section>
        <section className='bg-white rounded-lg shadow p-4'>
          <h2 className='font-semibold text-lg mb-2'>Done</h2>
          {/* Tasks for column 4 */}
        </section>
      </main>
    </div>
  )
}

export default App;
