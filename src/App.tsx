import { Component } from 'react';

class App extends Component {
  TestElement = () => {
    return (
      <div>Testing this.element</div>
    )
  }
  render() {
    return (
      <div>
        <h1>Testing</h1>
        <this.TestElement />
      </div>
    )
  }
}

export default App;
