import React, { Component } from "react";
import TaskBar from "./components/TaskBar";
import TaskList from "./components/TaskList";
import uniqid from "uniqid";
import "./styles.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        text: "",
        id: uniqid(),
        edit: false,
      },
      tasks: [],
    };

    this.handleTaskTextChange = this.handleTaskTextChange.bind(this);
    this.handleTaskTextSubmit = this.handleTaskTextSubmit.bind(this);
    this.handleTaskEditChange = this.handleTaskEditChange.bind(this);
    this.handleTaskEditSubmit = this.handleTaskEditSubmit.bind(this);
    this.handleTaskDel = this.handleTaskDel.bind(this);
    this.handleTaskEdit = this.handleTaskEdit.bind(this);
  }

  handleTaskTextChange(taskText) {
    this.setState({
      task: {
        text: taskText,
        id: this.state.task.id,
        edit: false,
      },
    });
  }

  handleTaskTextSubmit(e) {
    e.preventDefault();

    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: {
        text: "",
        id: uniqid(),
        edit: false,
      },
    });
  }

  handleTaskEditChange(taskEdit) {
    this.setState({
      task: {
        text: this.state.task.text,
        id: this.state.task.id,
        edit: taskEdit,
      },
    });
  }

  handleTaskEditSubmit(e) {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.reduce((prevVal, nextVal) => {
        if (nextVal.edit === false) {
          prevVal.push(nextVal);
        } else {
          nextVal.text = this.state.task.edit;
          nextVal.edit = false;
          prevVal.push(nextVal);
        }
        return prevVal;
      }, []),
    });

    this.setState({
      task: {
        text: "",
        id: uniqid(),
        edit: false,
      },
    });

    console.log(this.state.tasks);
  }

  handleTaskDel(id) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  }

  handleTaskEdit(id) {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          task.edit = true;
        }
        return task;
      }),
    });
    console.log(this.state.tasks);
  }

  render() {
    return (
      <div className="App">
        <h1>Task Lister</h1>
        <TaskBar
          taskText={this.state.task.text}
          onTaskChange={this.handleTaskTextChange}
          onTaskSubmit={this.handleTaskTextSubmit}
        />
        <TaskList
          taskText={this.state.task.text}
          onTaskChange={this.handleTaskEditChange}
          onTaskSubmit={this.handleTaskEditSubmit}
          tasks={this.state.tasks}
          onTaskDel={this.handleTaskDel}
          onTaskEdit={this.handleTaskEdit}
        />
      </div>
    );
  }
}

export default App;
