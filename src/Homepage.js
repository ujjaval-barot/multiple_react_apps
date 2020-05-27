import React, { useEffect, useState } from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Homepage.scss";

export default function Employee(props) {
  const [employees, setEmployees] = useState();
  useEffect(() => {
    const { employees } = props;
    setEmployees(employees);
  }, []);

  return (
    <Card style={{ padding: 30 }} className="container">
      <Card.Body>
        <Row className="p-4">
          <h1>Please click one any button to go to that project</h1>
        </Row>
        <Card>
          <Card.Body>
            <Row className="d-flex justify-content-center align-items-center">
              <div className="p-4">
                <Link to="/employee">
                  <Button>Employee</Button>
                </Link>
              </div>
              <div className="p-4">
                <Link to="/foodcart">
                  <Button>Foodcart</Button>
                </Link>
              </div>
              <div className="p-4">
                <Link to="/astroid">
                  <Button>Astroid</Button>
                </Link>
              </div>
              <div className="p-4">
                <Link to="/weather/country">
                  <Button>Weather</Button>
                </Link>
              </div>
              <div className="p-4">
                <Link to="/todo">
                  <Button>To-DO</Button>
                </Link>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}
