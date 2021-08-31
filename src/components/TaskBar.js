import React, { Component } from "react";

class TaskBar extends Component {
  constructor(props) {
    super(props);

    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
  }

  // Do this so we can constantly update state
  // to then make state the source of truth
  // in the actual input element.
  handleTaskChange(e) {
    this.props.onTaskChange(e.target.value);
  }

  handleTaskSubmit(e) {
    this.props.onTaskSubmit(e);
  }

  render() {
    return (
      <form onSubmit={this.handleTaskSubmit}>
        <textarea
          placeholder="Task..."
          value={this.props.taskText}
          onChange={this.handleTaskChange}
        />

        <input type="submit" value="Add Task" />
      </form>
    );
  }
}

export default TaskBar;
