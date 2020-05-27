import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import CheckboxInput from "../components/FormComponents/CheckboxInput";
import TextInput from "../components/FormComponents/TextInputs";
import SelectInput from "../components/FormComponents/SelectInput";

const SalaryDetails = (props) => {
  const { formik } = props;

  return (
    <div className="p-5">
      <Form onSubmit={(e) => console.log(e)}>
        <Form.Row className="d-flex justify-content-start align-items-center pb-4 ">
          <CheckboxInput
            formik={formik}
            className="col-4  xs={4}"
            labelClass="col-10"
            label={"PF Eligible"}
            id="pf"
            value={formik.values.pf}
            onChange={formik.handleChange}
          />
          <CheckboxInput
            formik={formik}
            className="col-4  xs={4}"
            labelClass="col-10"
            label={"ESI Eligible"}
            id="esi"
            value={formik.values.esi}
            onChange={formik.handleChange}
          />
        </Form.Row>
        <Form.Row className="pb-4">
          <TextInput
            // colClass="d-flex justify-content-start align-items-center"
            className="col-5 xs={4}"
            labelClass="col-4"
            label={"Annual Salary"}
            placeholder={"Annual Salary"}
            type="text"
            id="salary"
            value={formik.values.salary}
            onChange={formik.handleChange}
            error={formik.errors.salary}
          />
        </Form.Row>
        {/* 
      {error && (
        <Form.Text className={`d-block text-right mt-4 invalid-feedback`}>
          {error}
        </Form.Text>
      )} */}
      </Form>
    </div>
  );
};

export default SalaryDetails;
