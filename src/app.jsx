import './app.css'
import TaskForm from './components/Task/TaskForm';

const App = () => {
  return (
    <div className='app'>
      <h1 className='text-center font-bold text-3xl m-15'>Jira Board</h1>
        <TaskForm/>
         <main className='app_main'>
          <section className='task'>1</section>
          <section className='task'>2</section>
          <section className='task'>3</section>
          <section className='task'>4</section>
         </main>
    </div>
  )
}
 
export default App;

