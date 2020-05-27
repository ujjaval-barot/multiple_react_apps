import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { Card } from "react-bootstrap";
import BasicDetails from "../../components/BasicDetails";
import JobFilling from "../../components/JobFilling";
import JobDetails from "../../components/JobDetails";
import SalaryDetails from "../../components/SalaryDetails";
import { useFormik } from "formik";
import { globalSchema } from "../../constants";
import { Button } from "react-bootstrap";
import * as yup from "yup";
let Yup = require("yup");

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const schema = {
  0: Yup.object().shape({
    firstName: globalSchema.string(2, 15),
    lastName: globalSchema.string(2, 15),
    gender: globalSchema.string(),
    dob: globalSchema.string(),
    email: globalSchema.email(),
  }),
  1: Yup.object().shape({
    doj: globalSchema.string(),
    jobTitle: globalSchema.string(2, 15),
    businessUnit: globalSchema.string(2, 15),
    department: globalSchema.string(2, 15),
    location: globalSchema.string(2, 15),
    reportingManager: globalSchema.string(2, 15),
  }),
  2: Yup.object().shape({}),
  3: Yup.object().shape({
    salary: globalSchema.number(1, 10000000),
  }),
};

const AddEmployee = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  /** @method getSteps used for getting step information */
  const getSteps = () => {
    return ["BASIC DETAILS", "JOB DETAILS", "JOB FILLING", "SALARY DETAILS"];
  };

  const steps = getSteps();

  /** @method handleNext used for submit form data step wise and navigate to next form */
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  /** @library formik used for form validation and handling */

  const formik = useFormik({
    isValidating: true,
    initialValues: {},
    validationSchema: schema[activeStep],
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        /** @method addEmployee used to send form data to redux */
        props.addEmployee(formik.values);
        formik.resetForm();
        props.history.push("/employee");
      } else {
        handleNext();
      }
    },
  });

  /** @method getStepContent used to render the step content*/
  const getStepContent = (step) => {
    console.log(formik);
    switch (step) {
      case 0:
        return <BasicDetails formik={formik} onChange={formik.handleChange} />;
      case 1:
        return <JobDetails formik={formik} onChange={formik.handleChange} />;
      case 2:
        return <JobFilling formik={formik} onChange={formik.handleChange} />;
      case 3:
        return <SalaryDetails formik={formik} onChange={formik.handleChange} />;
      default:
        return "Unknown step";
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={(classes.root, "p-5")}>
      <Card>
        <Card.Header>Add Employee</Card.Header>
        <Card.Body>
          <form onSubmit={formik.handleSubmit}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset} className={classes.button}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignContent: "center",
                    }}
                  >
                    <Button
                      style={{ borderRadius: 50, width: 150 }}
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className="btn btn-primary"
                    >
                      Back
                    </Button>
                    {activeStep === steps.length - 1 ? (
                      <Button
                        style={{ borderRadius: 50, width: 150 }}
                        type="submit"
                        className="btn btn-success"
                      >
                        Finish
                      </Button>
                    ) : (
                      <Button
                        style={{ borderRadius: 100, width: 150 }}
                        type="submit"
                        className="btn btn-success rounded-100"
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddEmployee;
