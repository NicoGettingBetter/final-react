import React from 'react'

import Task from 'tasks/containers/Task.jsx'
import CreateNewTask from 'tasks/containers/CreateNewTask.jsx'

const Tasks = ({ tasks, tasksLoaded, project }) =>
  <div className='project-info__body'>
    {tasksLoaded && tasks.map((task, i) =>
      <Task key={i} task={task} />
    )}
    <CreateNewTask project={project}/>
  </div>

export default Tasks
