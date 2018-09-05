import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextInput from './TextInput';

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  form input {
    margin-bottom: 20px;
  }
`;

class Form extends Component {
  state = {
    isFormComplete: false,
    name: '',
    address: '',
    question: '',
  };

  render() {
    return (
      <Styles>
        <TextInput
          label="Name"
          placeholder="first & last name"
          onInputChange={e => {
            this.props.onInputChange(e);
          }}
        />

        {/* <button
          onClick={() => {
            this.setState({isFormComplete: true});
          }}>
          {this.state.isFormComplete ? 'Question Sent' : 'Submit form'}
        </button> */}
      </Styles>
    );
  }
}

export default Form;
