import React from "react";
import Select from "react-select";
import { Form, Col, Row } from "react-bootstrap";
import {
  reactSelectInvalidStyles,
  reactSelectStyles,
} from "../../constants/index";
import PropTypes from "prop-types";

import "./InputForms.scss";

export default function SelectInput(props) {
  let {
    className,
    labelClass,
    id,
    label = " ",
    inputClass,
    value,
    options,
    subtitle = "",
    error,
    colClass,
    ...rest
  } = props;

  SelectInput.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    subtitle: PropTypes.string,
    options: PropTypes.array,
    error: PropTypes.string,
    colClass: PropTypes.string,
    inputClass: PropTypes.string,
    onChangeText: PropTypes.func,
    onChange: PropTypes.func,
    labelClass: PropTypes.string,
  };

  if (!Array.isArray(value)) {
    value = options && options.filter((option) => option.value === value);
  }

  return (
    <Col
      className={
        colClass ? colClass : "d-flex justify-content-center align-items-center"
      }
    >
      <Form.Row as={Row} className={`${className} align-items-center`}>
        {label && (
          <label className={`label-text col-auto ${labelClass}`} htmlFor={id}>
            {label}
          </label>
        )}
        <Col>
          <Select
            {...rest}
            className={inputClass}
            menuPlacement="auto"
            name={id}
            value={value}
            options={options}
            styles={error ? reactSelectInvalidStyles : reactSelectStyles}
            onChange={(selected) => props.onChange(id, selected)}
          />
          {(subtitle || error) && (
            <Form.Text
              className={error ? `d-block invalid-feedback` : "text-muted"}
            >
              {error || subtitle}
            </Form.Text>
          )}
        </Col>
      </Form.Row>
    </Col>
  );
}
