import 'jest-dom/extend-expect';
// import 'react-testing-library/cleanup-after-each';
import React from 'react';
import {render, fireEvent, cleanup, getByTestId, simulate, waitForElement} from 'react-testing-library';
import App from '../App';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('App', () => {
  it('displays text from the input underneath it', () => {
    let inputText = 'Look mom Im testing!';
    const {container} = render(<App />);
    let input = container.querySelector('input');
    // console.log('hhhhhhhhhhhhhhhhhh', container);

    // container.find('[data-testid="input"]').simulate('change', {
    //   currentTarget: {value: inputText},
    // });

    // waitForElement(() => getByTestId('input')).simulate('change', {
    //   currentTarget: {value: inputText},
    // });

    fireEvent.change(input, {
      target: {value: inputText},
    });

    const pText = container.querySelector('p').innerHTML;
    expect(pText).toBe(inputText);
  });
});
