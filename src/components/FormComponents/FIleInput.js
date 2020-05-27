import React from 'react';
import { Form, Col } from 'react-bootstrap';

import './InputForms.scss';

export default function FileInput(props) {
  const { className, labelClass, id, value, inputLabel, placeholder, label = ' ', inputClass, onChangeText, onChange, subtitle, error, ...rest } = props;

  return (
    <Form.Group as={Col} className={`${className} fileInput`} controlId={id}>
      <Form.Label
        className={`label-text ${labelClass}`}>
        {label}
      </Form.Label>
      <Col className={`uploadButton ${inputClass} btn btn-primary`}
        style={{ borderColor: error && '#dc3545' }}>
        {value || placeholder}
        <Form.Control
          {...rest}
          autoComplete="off"
          isInvalid={error ? true : false}
          className={inputClass}
          type={'file'}
          name="file"
          onChange={e => onChange(e)}
        />
      </Col>
      {
        !error &&
        <Form.Text className="text-muted">
          {subtitle}
        </Form.Text>
      }
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group >
  )
}
