import React, { Component } from 'react'
import { connect } from 'react-redux'
import TasksPage from './components/TasksPage'

class App extends Component {
  //action creator
  onCreateTask = ({ title, description }) => {
    this.props.dispatch({
      type: 'CREATE_TASK',
      payload: {
        title,
        description
      }
    })
  }
  render() {
    console.log(this.props, "<---------------------------props from app")
    return (
      <div className="main-­content">
        <TasksPage tasks={this.props.tasks} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(App)