import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';

import styles from './Question.module.styl';

export default class Question extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    padding: PropTypes.oneOf(['small', 'medium', 'none']),
  };

  static defaultProps = {
    title: '',
    content: '',
    padding: 'medium',
  };

  render() {
    const { title, content, padding } = this.props;
    return (
      <Alignment padding={padding} vertical>
        {title && <div className={styles.title}>{title}</div>}
        {content && <div className={styles.content}>{content}</div>}
      </Alignment>
    );
  }
}
