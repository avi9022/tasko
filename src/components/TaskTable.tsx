import { FunctionComponent, useEffect } from 'react'
import { Task as TaskType } from '../types'
import dayjs from 'dayjs'
import Task from './Task'

const TaskTable: FunctionComponent<{
  tasks: TaskType[]
}> = ({ tasks }) => {
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Started At</th>
          <th scope="col">Total Hours Done</th>
          <th scope="col">Given estimation to client</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <Task task={task} index={index} />
        ))}
      </tbody>
    </table>
  )
}

export default TaskTable
