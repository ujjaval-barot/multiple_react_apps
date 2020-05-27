import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import TextInput from "../components/FormComponents/TextInputs";
import SelectInput from "../components/FormComponents/SelectInput";
import DatePickerInput from "../components/FormComponents/DatePickerInput";
import moment from "moment";
export default function BasicDetails(props) {
  const { formik } = props;

  return (
    <>
      <div className="p-5">
        <Form.Row className="d-flex justify-content-center align-items-center pb-4">
          <TextInput
            className="col-8 xs={4}"
            labelClass="col-4"
            label={"First Name"}
            placeholder={"First Name"}
            type="text"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.errors.firstName}
          />
          <TextInput
            className="col-8 xs={4}"
            labelClass="col-4"
            label={"Middle Name"}
            placeholder={"Middle Name"}
            type="text"
            id="middleName"
            value={formik.values.middleName}
            onChange={formik.handleChange}
            //   error={errors.name}
          />

          <TextInput
            className="col-8 xs={4}"
            labelClass="col-4"
            label={"Last Name"}
            placeholder={"Last Name"}
            type="text"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.errors.lastName}
          />
        </Form.Row>
        <Form.Row className="d-flex justify-content-center align-items-center pb-4 ">
          <SelectInput
            className="col-8 xs={8}"
            labelClass="col-4"
            label={"Gender"}
            placeholder={"Gender"}
            // type="text"
            id="gender"
            options={[
              { key: 1, label: "Male", value: "Male" },
              { key: 2, label: "Female", value: "Female" },
            ]}
            value={formik.values.gender}
            onChange={(id, selected) =>
              formik.setFieldValue(id, selected.value)
            }
            error={formik.errors.gender}
          />
          <DatePickerInput
            className="col-8 xs={4}"
            labelClass="col-4"
            label={"Date of Birth"}
            placeholder={"Date of Birth"}
            id="dob"
            value={formik.values.dob}
            onChange={formik.setFieldValue}
            error={formik.errors.dob}
          />
          <TextInput
            className="col-8 xs={4}"
            labelClass="col-4"
            label={"Email"}
            placeholder={"Email"}
            type="text"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
        </Form.Row>
      </div>
    </>
  );
}
