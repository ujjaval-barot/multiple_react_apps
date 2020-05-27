import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Employee.scss";

const Employee = (props) => {
  const [employees, setEmployees] = useState();
  useEffect(() => {
    const { employees } = props;
    setEmployees(employees);
  }, []);

  return (
    <Card style={{ padding: 30 }} className="container">
      <Card.Body>
        <Card>
          <Card.Body>
            <Row className="d-flex justify-content-center align-items-center">
              <div className="button-container">
                <Link to="/addemployee">
                  <Button>Add Employee</Button>
                </Link>
              </div>
            </Row>
          </Card.Body>
        </Card>
        <Row className="pt-5">
          {employees && employees.length > 0 ? (
            employees.map((item, index) => {
              return (
                <Col>
                  <Card className="w-100" bg="light" key={index}>
                    <Card.Header>
                      {item.firstName + " " + item.lastName}
                    </Card.Header>
                    <Card.Body>
                      <Row className="">
                        <Col>
                          <Image
                            style={{ width: "80px" }}
                            src="https://www.w3schools.com/howto/img_avatar.png"
                            roundedCircle
                          />
                        </Col>

                        <Col xs={8}>
                          <Card.Title>{item.jobTitle}</Card.Title>

                          <Card.Text>Location: {item.location}</Card.Text>
                          <Card.Text>Department: {item.department}</Card.Text>
                          <Card.Text>Gender: {item.gender}</Card.Text>
                          <Card.Text>
                            Reporting Manager: {item.reportingManager}
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Row className="d-flex justify-content-center align-items-center pt-4">
              <h1>No employees Found..! Please add employees.</h1>
            </Row>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};
export default Employee;
