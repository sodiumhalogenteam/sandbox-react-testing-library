import 'jest-dom/extend-expect';
// import 'react-testing-library/cleanup-after-each';
import React from 'react';
import {render} from 'react-testing-library';
import TextInput from '../TextInput';

test('react-testing-library works!', () => {
  const {container} = render(<TextInput label="Name" placeholder="first name" />);
  expect(container.firstChild).toHaveTextContent('Hello, Jill!');
});
