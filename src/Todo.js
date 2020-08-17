import React from "react";
import Show from "./Show";

class Todo extends React.Component {
  state = {
    task: "",
    taskArray: [],
    id: 0,
    isEditing: false,
    editId: ""
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  saveChange = (event) => {
    event.preventDefault();
    this.setState({
      id: this.state.id + 1,
      taskArray: [
        ...this.state.taskArray,
        { task: this.state.task, id: this.state.id }
      ],
      task: ""
    });
  };

  deleteTask = (id) => {
    const taskArrTemp = this.state.taskArray.filter((task) => task.id !== id);
    this.setState({
      taskArray: taskArrTemp
    });
  };

  setUpEditTodo = (id) => {
    console.log(id);
    const todo = this.state.taskArray.find((task) => task.id === id);

    this.setState({
      isEditing: true,
      task: todo.task,
      editId: id
    });
  };

  editTodo = (event) => {
    event.preventDefault();
    const tempArray = this.state.taskArray;
    const index = this.state.taskArray.findIndex(
      (task) => task.id === this.state.editId
    );

    tempArray[index] = { ...tempArray[index], task: this.state.task };

    this.setState({
      taskArray: tempArray,
      isEditing: false,
      task: "",
      editId: ""
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Todo tasks</h1>
        <form onSubmit={this.state.isEditing ? this.editTodo : this.saveChange}>
          <input
            type="text"
            name="task"
            placeholder="enter task"
            onChange={this.handleChange}
            value={this.state.task}
          ></input>
          <button type="submit">
            {this.state.isEditing ? "Editing" : "add"}
          </button>
        </form>
        <Show
          list={this.state.taskArray}
          delete={this.deleteTask}
          edit={this.setUpEditTodo}
        ></Show>
      </div>
    );
  }
}

export default Todo;
