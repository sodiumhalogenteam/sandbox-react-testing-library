import React, {Component} from 'react';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Form Testing</h1>
        </header>
        {/* {this.state.isFormComplete === true ? null : <Form />} */}
        <Form />
      </div>
    );
  }
}

export default App;
