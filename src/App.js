import React, {Component} from 'react';
import Form from './Form';

class App extends Component {
  state = {
    formContent: '',
  };

  onInputChange(formContent) {
    this.setState({formContent});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Form Testing</h1>
        </header>
        {/* {this.state.isFormComplete === true ? null : <Form />} */}
        <Form
          onInputChange={e => {
            this.onInputChange(e.target.value);
          }}
        />
        <p>{this.state.formContent}</p>
      </div>
    );
  }
}

export default App;
