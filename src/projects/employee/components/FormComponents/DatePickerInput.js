import React from "react";
import { Form, Col, Row, InputGroup } from "react-bootstrap";
import moment from "moment";
import DateRangePicker from "react-bootstrap-daterangepicker";
import PropTypes from "prop-types";

import "./InputForms.scss";
import "bootstrap-daterangepicker/daterangepicker.css";

const DatePickerInput = (props) => {
  const {
    className,
    labelClass,
    id,
    inputLabel,
    label = " ",
    value = moment(new Date()).format("MM/DD/YYYY"),
    inputClass,
    onChangeText,
    minDate,
    maxDate,
    onChange,
    subtitle,
    error,
    disabled,
    ...rest
  } = props;

  DatePickerInput.propTypes = {
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

  const onBlur = () => {
    if (!moment(value).isValid()) {
      onChange(id, moment(new Date()).toDate());
    }
  };

  const datePicker = () => {
    return (
      <InputGroup>
        <InputGroup.Prepend className="calenderIconContainer">
          <InputGroup.Text className="bg-white">
            <i className="la la-calendar" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          {...rest}
          disabled={disabled}
          label={inputLabel}
          autoComplete="off"
          onBlur={onBlur}
          isInvalid={error ? true : false}
          className={inputClass}
          value={moment(value).format("MM/DD/YYYY")}
          onChange={(e) => {
            onChangeText && onChangeText(id, e.target.value);
            onChange(e);
          }}
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </InputGroup>
    );
  };

  return (
    <Col className="d-flex justify-content-center align-items-center">
      <Form.Row
        className={`${className || "mb-4"} align-items-center`}
        controlId={id}
      >
        {label && (
          <Form.Label className={`label-text col-auto ${labelClass || ""}`}>
            {label}
          </Form.Label>
        )}
        <Col>
          {!disabled ? (
            <DateRangePicker
              minDate={minDate ? moment(minDate) : undefined}
              maxDate={maxDate ? moment(maxDate) : undefined}
              containerStyles={{}}
              onApply={(e, picker) => {
                onChange(id, moment(picker.startDate).toISOString());
              }}
              singleDatePicker={true}
            >
              {datePicker()}
            </DateRangePicker>
          ) : (
            datePicker()
          )}
          {!error && <Form.Text className="text-muted">{subtitle}</Form.Text>}
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Col>
      </Form.Row>
    </Col>
  );
};
export default DatePickerInput;
