import React, {Component} from 'react';
import Form from './Form';

class App extends Component {
  state = {
    isFormComplete: false,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Form Testing</h1>
        </header>
        {this.state.isFormComplete === true ? null : <Form />}
        <button
          onClick={() => {
            this.setState({isFormComplete: true});
          }}>
          Submit form
        </button>
      </div>
    );
  }
}

export default App;
