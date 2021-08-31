import React, { Component } from "react";

class DeleteBtn extends Component {
  constructor(props) {
    super(props);
    this.handleTaskDel = this.handleTaskDel.bind(this);
  }

  handleTaskDel() {
    this.props.onTaskDel(this.props.id);
  }

  render() {
    return <button onClick={this.handleTaskDel}>Delete</button>;
  }
}

export default DeleteBtn;
