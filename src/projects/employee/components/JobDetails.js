import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import TextInput from "../components/FormComponents/TextInputs";
import SelectInput from "../components/FormComponents/SelectInput";
import DatePickerInput from "../components/FormComponents/DatePickerInput";
import moment from "moment";
export default function BasicDetails(props) {
  const { formik } = props;

  return (
    <div className="p-5">
      <Form.Row className="d-flex justify-content-center align-items-center pb-4 ">
        <DatePickerInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Date of Joining"}
          placeholder={"Date of Joining"}
          // minDate={moment()}
          id="doj"
          value={formik.values.doj}
          onChange={formik.setFieldValue}
          error={formik.errors.doj}
        />
        <TextInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Employee Number"}
          placeholder={"Employee Number"}
          type="number"
          id="employeeNumber"
          value={formik.values.employeeNumber}
          onChange={formik.handleChange}
          //   error={errors.name}
        />
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Job Title"}
          placeholder={"Job Title"}
          error={formik.errors.jobTitle}
          // type="text"
          id="jobTitle"
          options={[
            { key: 1, label: "Manager", value: "Manager" },
            { key: 2, label: "Senior Engineer", value: "Senior Engineer" },
            { key: 3, label: "Junior Engineer", value: "Junior Engineer" },
            { key: 4, label: "Fresher", value: "Fresher" },
            { key: 5, label: "Trainee", value: "Trainee" },
          ]}
          value={formik.values.jobTitle}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
        />
      </Form.Row>
      <Form.Row className="d-flex justify-content-center align-items-center pb-4 ">
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Business Unit"}
          placeholder={"Business Unit"}
          // type="text"
          id="businessUnit"
          options={[
            { key: 1, label: "Ahmedabad", value: "Ahmedabad" },
            { key: 2, label: "Hydrabad", value: "Hydrabad" },
            { key: 3, label: "Banglore", value: "Banglore" },
          ]}
          value={formik.values.businessUnit}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
          error={formik.errors.businessUnit}
        />
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Department"}
          placeholder={"Department"}
          // type="text"
          id="department"
          options={[
            { key: 1, label: "Sales", value: "Sales" },
            { key: 2, label: "Marketing", value: "Marketing" },
            { key: 3, label: "Production", value: "Production" },
            { key: 4, label: "Development", value: "Development" },
            { key: 4, label: "Testing", value: "Testing" },
          ]}
          value={formik.values.department}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
          error={formik.errors.department}
        />
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Location"}
          placeholder={"Location"}
          // type="text"
          id="location"
          options={[
            { key: 1, label: "Ahmedabad", value: "Ahmedabad" },
            { key: 2, label: "Hydrabad", value: "Hydrabad" },
            { key: 3, label: "Banglore", value: "Banglore" },
          ]}
          value={formik.values.location}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
          error={formik.errors.location}
        />
      </Form.Row>
      <Form.Row className="d-flex justify-content-center align-items-center pb-4 ">
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Reporting Manager"}
          placeholder={"Reporting Manager"}
          // type="text"
          id="reportingManager"
          options={[
            { key: 1, label: "Person 1", value: "Person 1" },
            { key: 2, label: "Person 2", value: "Person 2" },
            { key: 3, label: "Person 3", value: "Person 3" },
          ]}
          value={formik.values.reportingManager}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
          error={formik.errors.reportingManager}
        />
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Worker Type"}
          placeholder={"Worker Type"}
          // type="text"
          id="workerType"
          options={[
            { key: 1, label: "Permanent", value: "Permanent" },
            { key: 2, label: "Temporary", value: "Temporary" },
            { key: 3, label: "Guest", value: "Guest" },
          ]}
          value={formik.values.workerType}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
        />
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Probation Period"}
          placeholder={"Probation Period"}
          // type="text"
          id="probationPeriod"
          options={[
            { key: 1, label: "1 Month", value: "1 Month" },
            { key: 2, label: "3 Month", value: "3 Month" },
            { key: 3, label: "6 Month", value: "6 Month" },
          ]}
          value={formik.values.probationPeriod}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
        />
      </Form.Row>
      <Form.Row className="pb-4">
        <SelectInput
          colClass="d-flex justify-content-start align-items-center"
          className="col-4 xs={4}"
          labelClass="col-5"
          label={"User Type"}
          placeholder={"User Type"}
          id="userType"
          options={[
            { key: 1, label: "Developer", value: "Developer" },
            { key: 2, label: "Tester", value: "Tester" },
            { key: 3, label: "Manager", value: "Manager" },
          ]}
          value={formik.values.userType}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
        />
      </Form.Row>
      {/* 
      {error && (
        <Form.Text className={`d-block text-right mt-4 invalid-feedback`}>
          {error}
        </Form.Text>
      )} */}
    </div>
  );
}
