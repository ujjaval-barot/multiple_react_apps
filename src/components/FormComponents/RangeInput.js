import React from "react";
import { Form, Col, Row } from 'react-bootstrap';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

import './InputForms.scss';

const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      overlayStyle={{ zIndex: 1051 }}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};


export default function RangeInput(props) {
  const { className, labelClass, id, label = ' ', onChange, subtitle, error, ...rest } = props;

  return (

    <Col>
      <Form.Group as={Row} className={className} controlId={id}>
        <Form.Label
          className={`label-text col-auto ${labelClass}`}>
          {label}
        </Form.Label>
        <Col>
          <Slider {...rest}
            handle={handle}
            onChange={(value) => onChange(id, value)}
          />
          {
            !error &&
            <Form.Text className="text-muted">
              {subtitle}
            </Form.Text>
          }
          <Form.Control.Feedback type="invalid">
            {error}
          </Form.Control.Feedback>
        </Col>
      </Form.Group >

    </Col>
  )
}