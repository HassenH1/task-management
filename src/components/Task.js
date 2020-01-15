import React from 'react';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed']

const Task = props => {
  return (
    <div className="task">
      <div className="task­header">
        <select value={props.task.status}>
          {TASK_STATUSES.map(status => (
            <option value={status} key={status}>{status}</option>
          ))}
        </select>
        <div>{props.task.title}</div>
      </div>
      <hr />
      <div className="task­body">{props.task.description}</div>
    </div>
  );
}
export default Task;