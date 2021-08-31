import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

class Task extends Component {
  render() {
    const { num, id, task, onTaskDel, onTaskEdit } = this.props;

    return (
      <div className="task">
        {num + 1}. {task}
        <DeleteBtn id={id} onTaskDel={onTaskDel} />
        <EditBtn onTaskEdit={onTaskEdit} id={id} />
      </div>
    );
  }
}

export default Task;
