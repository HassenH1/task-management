import { uniqueId, CREATE_TASK } from '../actions'

const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
]

export default function tasks(state = { tasks: mockTasks }, action) {
  switch(action.type){
    case CREATE_TASK:
      console.log(state.tasks)
      break;
    default:
      return state
  }
}
