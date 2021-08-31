import React, { Component } from "react";

class EditBtn extends Component {
  constructor(props) {
    super(props);
    this.handleTaskEdit = this.handleTaskEdit.bind(this);
  }

  handleTaskEdit() {
    this.props.onTaskEdit(this.props.id);
  }

  render() {
    return <button onClick={this.handleTaskEdit}>Edit</button>;
  }
}

export default EditBtn;
