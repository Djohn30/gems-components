import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import cn from 'classnames';

import Panel from '../../../src/components/Panel';

import { Field } from '../../../src/fields/Field';
import { Form, formProps } from '../../../src/fields/Form';

import Editor from './editor/Editor';

import { compileForm, appendField } from './formBuilder';

import styles from './Playground.module.styl';

const DELAY = 300;

export default class Playground extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    editMode: PropTypes.oneOf(['full', 'edit', 'readOnly', 'hidden']),
    fullscreen: PropTypes.bool,
    form: formProps.isRequired,
  };

  static defaultProps = {
    fullscreen: false,
    editMode: 'full',
  };

  constructor(props) {
    super(props);

    this.state = {
      source: JSON.stringify(props.form, undefined, 2),
      form: props.form,
      error: null,
    };

    this.compileFormDebounced = debounce(this.compileForm, DELAY);
  }

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

  handleSubmit = values => {
    alert(JSON.stringify(values, undefined, 2));
  };

  render() {
    const { title, children, editMode, fullscreen } = this.props;
    const { source, form, error } = this.state;
    return (
      <Panel className={cn(styles.panel, { [styles.fullscreen]: fullscreen })}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{children}</div>
        <div className={styles.content}>
          {editMode !== 'hidden' && (
            <Editor
              editMode={editMode}
              source={source}
              error={error}
              onChange={this.handleChange}
              onAddField={this.handleAddField}
            />
          )}
          <div className={styles.form}>
            <Form
              form={form}
              className={styles.form}
              submitState={{ state: '' }}
              onSubmit={this.handleSubmit}
            >
              {fieldProps => <Field {...fieldProps} />}
            </Form>
          </div>
        </div>
      </Panel>
    );
  }
}
