import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type="text"
          placeholder={this.props.placeholder}
          onChange={e => {
            {
              this.props.onInputChange(e);
            }
          }}
          date-testid="input"
        />
      </div>
    );
  }
}

export default TextInput;
