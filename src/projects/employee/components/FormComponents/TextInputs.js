import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./InputForms.scss";

export default function TextInput(props) {
  const {
    className,
    labelClass,
    id,
    inputLabel,
    label = " ",
    value = "",
    inputContainerClass = "col",
    inputClass,
    onChangeText,
    onChange,
    subtitle,
    colClass,
    error,
    ...restProps
  } = props;

  TextInput.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    subtitle: PropTypes.string,
    error: PropTypes.string,
    colClass: PropTypes.string,
    inputClass: PropTypes.string,
    onChangeText: PropTypes.func,
    onChange: PropTypes.func,
    labelClass: PropTypes.string,
  };

  return (
    <Col
      className={
        colClass ? colClass : "d-flex justify-content-center align-items-center"
      }
    >
      <Form.Row className={`${className || "mb-4 "} align-items-center`}>
        {label && (
          <Form.Label
            htmlFor={id}
            className={`label-text col-auto ${labelClass || ""}`}
          >
            {label}
          </Form.Label>
        )}
        <div className={inputContainerClass}>
          <Form.Control
            {...restProps}
            id={id}
            label={inputLabel}
            autoComplete="off"
            isInvalid={error ? true : false}
            className={inputClass}
            value={value}
            onChange={(e) => {
              onChangeText && onChangeText(id, e.target.value);
              onChange(e);
            }}
          />
          {!error && <Form.Text className="text-muted">{subtitle}</Form.Text>}
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </div>
      </Form.Row>
    </Col>
  );
}
