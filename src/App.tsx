import TaskTable from './components/TaskTable'
import { Task } from './types'

const App = () => {
  const dummyTasks: Task[] = [
    {
      name: 'task1',
      totalHours: 15480000,
      startingDate: Date.now(),
      lastTimeWorkedOn: null,
      estimation: 25,
    },
  ]

  return (
    <div className="App">
      <TaskTable tasks={dummyTasks} />
    </div>
  )
}

export default App
