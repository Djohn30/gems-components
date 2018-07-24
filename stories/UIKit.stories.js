import React from 'react';
import cn from 'classnames';

import { storiesOf } from '@storybook/react';

import Kind from './kit/Kind';

import styles from './UIKit.stories.module.styl';

storiesOf('Gems UI', module)
  .add('Introduction', () => <div className={styles.container} />)
  .add('Colors', () => (
    <div className={styles.container}>
      <h1 className={styles.header}>Colors</h1>
      <Kind title="Base Colors">
        <div className={styles.colors}>
          <div className={cn(styles.color, styles.pink)}>color-pink</div>
          <div className={cn(styles.color, styles.pinkLight)}>
            color-pink-light
          </div>
          <div className={cn(styles.color, styles.aqua)}>color-aqua</div>
          <div className={cn(styles.color, styles.aquaLight)}>
            color-aqua-light
          </div>
          <div className={cn(styles.color, styles.blue)}>color-blue</div>
        </div>
      </Kind>
      <Kind title="Text Colors">
        <div className={styles.colors}>
          <div className={cn(styles.color, styles.text1)}>color-text-1</div>
          <div className={cn(styles.color, styles.textGray1)}>
            color-text-gray-1
          </div>
        </div>
      </Kind>
      <Kind title="Grayscale">
        <div className={styles.colors}>
          <div className={cn(styles.color, styles.black)}>color-black</div>
          <div className={cn(styles.color, styles.borderGray)}>
            color-border-grey
          </div>
          <div className={cn(styles.color, styles.gray)}>color-gray</div>
          <div className={cn(styles.color, styles.white)}>color-white</div>
        </div>
      </Kind>
    </div>
  ))
  .add('Typograpy', () => (
    <div className={styles.container}>
      <h1 className={styles.header}>Typograpy</h1>
      <Kind title="headline — 24px, 1.3, 400">
        <div className={cn(styles.font, styles.headline)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="title — 20px, 1.4, 500">
        <div className={cn(styles.font, styles.title)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="menu — 18px, 1.4, 400">
        <div className={cn(styles.font, styles.menu)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="subheader — 16px, 1.4, 400">
        <div className={cn(styles.font, styles.subheader)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="normal — 14px, 1.4 400">
        <div className={cn(styles.font, styles.normal)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="body — 13px 1.4, 400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <div className={cn(styles.font, styles.body)} />
      </Kind>
      <Kind title="caption — 12px, 1.3, 400">
        <div className={cn(styles.font, styles.caption)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
    </div>
  ));
