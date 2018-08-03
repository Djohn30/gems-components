# Gems UI
[![npm version](https://img.shields.io/npm/v/@gigs/components.svg?style=flat-square)](https://www.npmjs.com/package/@gigs/components)

Gems UI is a collection of React components, tools and guidlines for creating Gems products.
* **Forms:** Dynamic JSON powered form library for React.

* **Components:** set of components such as Buttons, Panels, Menus, HOC's.

* **UI kit:** colors, dimensions and typography used across gems.org apps

## Documentation and live playground
Detailed documentation and forms playground is available in storybook

https://gemsorg.github.io/gems-components/

## installation

Gems components library is available as an [npm package](https://www.npmjs.com/package/@gigs/components):

```bash
npm install  @gigs/components --save

```

## Prerequisites

Gems UI use [stylus](http://stylus-lang.com/) and [css-modules](https://github.com/css-modules/css-modules) by default to import stylesheets.
We recommend webpack, or any other bundler if it allow to import `.styl` files located in `node_modules`

Here is webpack config example
```jsx
// webpack.config.babel.js
export default (env = {}) => {
  const dev = !!env.dev;
  return {
    ...
    module: {
      rules: [
        {
          test: /^((?!\.module).)*\.styl$/,
          use: [
            'style-loader',
            'css-loader?sourceMap&importLoaders=2',
            'postcss-loader?sourceMap',
            'stylus-loader?paths[]=src',
          ],
          exclude: /node_modules\/(?!(@gigs)\/).*/,
        },
        {
          test: /\.module\.styl$/,
          use: [
            'style-loader',
            `css-loader?sourceMap&importLoaders=2&modules&localIdentName=${dev ? '[local]__[path][name]__' : ''}[hash:base64:5]`,
            'postcss-loader?sourceMap',
            'stylus-loader?paths[]=src',
          ],
          exclude: /node_modules\/(?!(@gigs)\/).*/,
        }
      ],
    },
  };
};

```

## Basic Usage

```jsx
import React from 'react'
import { Button } from '@gigs/components';

const MyComponent = () => (
  <Button size="medium" theme="pink" onClick={() => console.log('click!')}>
    Hello World
  </Button>
);

```


## Development with Storybook

Install project dependencies and run storybook
```bash
yarn install
yarn storybook
```
Open http://localhost:6006/

Add story for your component to  `.storybook/config.js`
```jsx
configure(() => {
  require('../stories/components/MyCustomComponent.stories');
})
```

```jsx
// stories/components/MyCustomComponent.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import panelDecorator from '../kit/panelDecorator';

import MyCustomComponent from '../../src/components/MyCustomComponent'

storiesOf("Components/MyCustomComponent", module)
  .addDecorator(panelDecorator)
  .add("Default", () => (
    <Kind title="My Custom Component">
      <MyCustomComponent />
    </Kind>
  ))
  .add("Red", () => (
    <Kind title="My Custom Red Component">
      <MyCustomComponent color="red" />
    </Kind>
  ));
```

## License
