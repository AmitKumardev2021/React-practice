import React from "react";

class Student extends React.Component {
  construtor() {
    super();
  }

  componentWillUnmount() {
    console.log("componentwillUnmount");
  }
  render() {
    return (
      <div className="App">
        <h4>Hello student</h4>
      </div>
    );
  }
}
