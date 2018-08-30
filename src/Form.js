import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  input {
    margin-bottom: 20px;
  }
`;

class Form extends Component {
  render() {
    return (
      <Styles>
        <label>Name</label>
        <input type="text" />

        <label>Address</label>
        <input type="text" />

        <label>Question</label>
        <input type="text" />
      </Styles>
    );
  }
}

export default Form;
