import React, { Component } from 'react';
import debounce from 'debounce';

import Editor from './editor/Editor';
import Form from './Form';

import { compileForm, appendField } from './formBuilder';

import sample from './sample.json';

import styles from './Playground.module.styl';

const DELAY = 300;

export default class Playground extends Component {
  constructor(props) {
    super(props);
    this.compileFormDebounced = debounce(this.compileForm, DELAY);
  }

  state = {
    source: JSON.stringify(sample, undefined, 2),
    form: sample,
    error: null,
  };

  compileForm = () => {
    try {
      const { source } = this.state;
      const form = compileForm(source);
      this.setState({ form, error: null });
    } catch (error) {
      this.setState({ error });
    }
  };

  handleChange = source => {
    this.setState({ source }, this.compileFormDebounced);
  };

  handleAddField = fieldName => {
    const { error, form } = this.state;
    if (!error) {
      try {
        this.setState({ ...appendField(form, fieldName) });
      } catch (err) {
        this.setState({ error: err });
      }
    }
  };

  render() {
    const { source, form, error } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Editor
            source={source}
            error={error}
            onChange={this.handleChange}
            onAddField={this.handleAddField}
          />
          <div className={styles.form}>
            <Form form={form} />
          </div>
        </div>
      </div>
    );
  }
}
