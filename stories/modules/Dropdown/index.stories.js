import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../../src/components/Panel';

import Playground from '../Playground/Playground';
import Markdown from '../../kit/Markdown';
import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'dropdown',
      type: 'dropdown',
      placeholder: 'Select...',
      options: [
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2' },
        { value: 3, label: 'Option 3' },
        { value: 4, label: 'Option 4' },
      ],
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Dropdown', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
