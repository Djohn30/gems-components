import React from 'react';

import { storiesOf } from '@storybook/react';
import Kind from '../kit/Kind';

import Input from '../../src/components/Input';
import ErrorMessage from '../../src/components/ErrorMessage';

storiesOf('Components/Input', module)
  .add('default', () => (
    <Kind title="Input">
      <Input placeholder="Type something..." />
    </Kind>
  ))
  .add('with error', () => (
    <Kind title="Input">
      <Input placeholder="Type something..." />
      <ErrorMessage error={{ commonMessage: 'some error message' }} />
    </Kind>
  ));
