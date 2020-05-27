
import React from "react";
import moment from 'moment';
import { Form, Col, InputGroup } from 'react-bootstrap';
import TimePicker from 'rc-time-picker';
import './InputForms.scss';


export default function TimePickerInput(props) {
  let { className, startDate, labelClass, min, id, format = 'h:mm a', label = ' ', value = moment(), inputClass = '', onChange, subtitle, error, ...restProps } = props;

  //TODO: need to find a better way for am pm time picker it has issues in disabling to change value
  // function getDisabledAmPm(value) {

  //   let isCurrent = moment(startDate).format('MM/DD/YYYY') === moment().format('MM/DD/YYYY')

  //   if (isCurrent && value.isBefore(startDate)) return
  //   else onChange(id, value ? value.toISOString() : value)
  // }

  function getDisabledHours() {
    var hours = [];
    for (var i = 0; i < moment(startDate).hour(); i++) {
      hours.push(i);
    }
    return hours;
  }

  function getDisabledMinutes(selectedHour) {
    var minutes = [];
    if (selectedHour === moment(startDate).hour()) {
      for (var i = 0; i < moment(startDate).minute(); i++) {
        minutes.push(i);
      }
    }
    return minutes;
  }

  return (

    <Col>
      <Form.Row className={`${className || 'mb-4'} align-items-center`} controlId={id}>
        <Form.Label
          className={`label-text col-auto ${labelClass || ''}`}>
          {label}
        </Form.Label>
        <Col>
          <InputGroup>
            <InputGroup.Prepend className='calenderIconContainer'>
              <InputGroup.Text className="bg-white">
                <i className="la la-clock-o" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <TimePicker
              {...restProps}
              showSecond={false}
              value={value ? moment(value) : value}
              inputClassName={`form-control ${error ? "is-invalid" : ""} ${inputClass}`}
              onChange={(value) => {
                onChange(id, value ? value.toISOString() : value)
              }}
              format={format}
              inputReadOnly
              // onAmPmChange={getDisabledAmPm(value = value ? moment(value) : value)}
              disabledHours={getDisabledHours}
              disabledMinutes={getDisabledMinutes}
              hideDisabled
            />
          </InputGroup>
          {
            (subtitle || error) &&
            <Form.Text className={error ? `d-block invalid-feedback` : 'text-muted'}>
              {error || subtitle}
            </Form.Text>
          }
        </Col>
      </Form.Row>

    </Col>
  )
}

