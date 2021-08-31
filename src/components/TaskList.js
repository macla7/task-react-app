import React, { Component } from "react";
import Task from "./Task";
import TaskBar from "./TaskBar";

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks.map((task, i) => {
      if (task.edit !== false) {
        return (
          <TaskBar
            taskText={this.props.edit}
            onTaskChange={this.props.onTaskChange}
            onTaskSubmit={this.props.onTaskSubmit}
            key={task.id}
          />
        );
      } else {
        return (
          <Task
            num={i}
            task={task.text}
            key={task.id}
            id={task.id}
            onTaskDel={this.props.onTaskDel}
            onTaskEdit={this.props.onTaskEdit}
          />
        );
      }
    });

    return (
      <div className="tasks">
        <h2>Tasks</h2>
        <div>{tasks}</div>
      </div>
    );
  }
}

export default TaskList;
