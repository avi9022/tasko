import { FunctionComponent, useEffect, useState } from 'react'
import { Task as TaskType } from '../types'
import dayjs from 'dayjs'

const Task: FunctionComponent<{
  task: TaskType
  index: number
}> = ({ task, index }) => {
  const [currTask, setCurrTask] = useState(task)

  const { name, startingDate, totalHours, estimation, lastTimeWorkedOn } = currTask
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{name}</td>
      <td>{dayjs(startingDate).format('DD/MM/YYYY')}</td>
      <td>{(totalHours / 1000 / 60 / 60).toFixed(2)}</td>
      <td>{estimation}</td>
      <td>
        <div
          className="rounded-circle"
          onClick={() => {
            setCurrTask((prevState) => ({
              ...prevState,
              lastTimeWorkedOn: prevState.lastTimeWorkedOn ? null : Date.now(),
              totalHours: prevState.lastTimeWorkedOn ? Date.now() - prevState.lastTimeWorkedOn : prevState.totalHours,
            }))
          }}
          style={{ backgroundColor: lastTimeWorkedOn ? 'green' : 'red', width: '30px', height: '30px' }}
        ></div>
      </td>
    </tr>
  )
}

export default Task
