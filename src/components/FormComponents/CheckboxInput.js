import React, { useState } from "react";
import Select from "react-select";
import { Form, Button, Col, Row } from "react-bootstrap";
import {
  reactSelectInvalidStyles,
  reactSelectStyles,
} from "../../constants/index";

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
    formik,
    ...rest
  } = props;

  const [checked, setChecked] = useState(false);
  const [CheckValue, setCheckValue] = useState(true);

  const handleChange = (e) => {
    // e.preventDefault();
    setCheckValue(!CheckValue);
    setChecked(!checked);

    console.log("checked", e.target.value);
    formik.setFieldValue(id, CheckValue);
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
      <Form.Row
        style={{ padding: 7, border: "1px solid #ccc", borderRadius: 5 }}
        as={Row}
        className={`${className} align-items-center`}
      >
        {label && (
          <label className={`label-text col-auto ${labelClass}`} htmlFor={id}>
            {label}
          </label>
        )}
        <Col>
          <Form.Check
            type="switch"
            id={id}
            // onClick={handleChange}
            checked={checked}
            onChange={(e) => handleChange(e)}
            label=""
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
