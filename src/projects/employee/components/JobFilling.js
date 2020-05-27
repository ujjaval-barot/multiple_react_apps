import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import TextInput from "../components/FormComponents/TextInputs";
import SelectInput from "../components/FormComponents/SelectInput";
import DatePickerInput from "../components/FormComponents/DatePickerInput";
import moment from "moment";

const JobFilling = (props) => {
  const { formik } = props;
  return (
    <div className="p-5">
      <Form.Row className="d-flex justify-content-center align-items-center pb-4 ">
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Leave Plan"}
          placeholder={"Leave Plan"}
          // type="text"
          id="leavePlan"
          options={[
            { key: 1, label: "Leave Plan 1", value: "Leave Plan 1" },
            { key: 2, label: "Leave Plan 1", value: "Leave Plan 1" },
          ]}
          value={formik.values.leavePlan}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
          error={formik.errors.leavePlan}
        />
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Shift"}
          placeholder={"Shift"}
          // type="text"
          id="Shift"
          options={[
            { key: 1, label: "Normal Shift", value: "Normal Shift" },
            { key: 2, label: "Night Shift", value: "Night Shift" },
          ]}
          value={formik.values.Shift}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
          error={formik.errors.Shift}
        />
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Week Offs"}
          placeholder={"Week Offs"}
          // type="text"
          id="weekOff"
          options={[
            { key: 1, label: "Sunday", value: "Sunday" },
            { key: 2, label: "Saturday, Sunday", value: "Saturday, Sunday" },
          ]}
          value={formik.values.weekOff}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
          error={formik.errors.weekOff}
        />
      </Form.Row>
      <Form.Row className="d-flex justify-content-center align-items-center pb-4 ">
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Holiday List"}
          placeholder={"Holiday List"}
          // type="text"
          id="holidayList"
          options={[
            {
              key: 1,
              label: "Ahmedabad Holiday List",
              value: "Ahmedabad Holiday List",
            },
            {
              key: 2,
              label: "Hydrabad Holiday List",
              value: "Hydrabad Holiday List",
            },
            {
              key: 3,
              label: "Banglore Holiday List",
              value: "Banglore Holiday List",
            },
          ]}
          value={formik.values.holidayList}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
          error={formik.errors.holidayList}
        />
        <SelectInput
          className="col-10 xs={4}"
          labelClass="col-5"
          label={"Attendance Policy"}
          placeholder={"Attendance Policy"}
          // type="text"
          id="attendancePolicy"
          options={[
            { key: 1, label: "Policy 1", value: "Policy 1" },
            { key: 2, label: "Policy 2", value: "Policy 2" },
          ]}
          value={formik.values.attendancePolicy}
          onChange={(id, selected) => formik.setFieldValue(id, selected.value)}
          error={formik.errors.attendancePolicy}
        />
      </Form.Row>
    </div>
  );
};

export default JobFilling;
