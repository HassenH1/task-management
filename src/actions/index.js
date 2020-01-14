let _id = 1
export function uniqueId() {

  return _id++
}

export const CREATE_TASK = 'CREATE_TASK'

export function createTask({ title, description }) {

  return {
    type: CREATE_TASK,
    payload: {

      id: uniqueId(),
      title,
      description,
      status: 'Unstarted',
    },
  }
}
