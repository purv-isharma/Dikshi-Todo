import React from "react";

class Show extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map((task) => {
          return (
            <div key={task.id}>
              <h1>
                {task.task}
                {task.id}
              </h1>
              <button onClick={() => this.props.delete(task.id)}>Delete</button>
              <button onClick={() => this.props.edit(task.id)}>Edit</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Show;
