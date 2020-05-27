import React, { useState, useEffect } from "react";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Fab,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Alert from "@material-ui/lab/Alert";
import { Modal, Button, Form, Card, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { globalSchema } from "../../../../constants";
import TextInput from "../../../../components/FormComponents/TextInputs";
import { makeStyles } from "@material-ui/core/styles";
import "./Todo.css";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Todo = (props) => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    props.getTodoList();
  }, []);
  const schema = yup.object().shape({
    addTodo: globalSchema.string(2, 15),
  });
  const formik = useFormik({
    isValidating: true,
    initialValues: {},
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      /** @method addEmployee used to send form data to redux */
      props.addTodo(values.addTodo);
      resetForm();
      toggleModal();
    },
  });

  const handleChange = (todo, e) => {
    todo.completed = e.target.checked;
    props.updateTodo(todo);
  };

  const handleDelete = (todo) => {
    props.deleteTodo(todo.id);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const { todoList, loading, error } = props;

  return (
    <>
      {error && <Alert severity="error">{error.message} — check it out!</Alert>}
      {loading ? (
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Card
          style={{ padding: 30 }}
          className="d-flex justify-content-center align-items-center pb-4"
        >
          <Row style={{ width: "100%" }}>
            <Col>
              {todoList &&
                todoList.length > 0 &&
                todoList.map((todo) => (
                  <Row key={todo.id}>
                    <Col xs={8}>
                      <FormGroup>
                        <FormControlLabel
                          id={todo.id}
                          control={
                            <>
                              <Checkbox
                                checked={todo.completed}
                                onChange={(e) => handleChange(todo, e)}
                              />
                            </>
                          }
                          label={todo.todo}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <DeleteIcon onClick={(e) => handleDelete(todo, e)} />
                    </Col>
                  </Row>
                ))}
            </Col>
            <Col>
              <Fab color="primary" aria-label="add">
                <AddIcon onClick={toggleModal} />
              </Fab>
            </Col>
            <Modal
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
              show={showModal}
              onHide={toggleModal}
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  ADD TODO
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form.Row className="d-flex justify-content-center align-items-center pb-4">
                  <TextInput
                    className="col-8 xs={4}"
                    placeholder={"Input Todo Title"}
                    type="text"
                    id="addTodo"
                    value={formik.values.addTodo}
                    onChange={formik.handleChange}
                    error={formik.errors.addTodo}
                  />
                </Form.Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>
                  Close
                </Button>
                <Button
                  type="submit"
                  onClick={formik.handleSubmit}
                  variant="primary"
                >
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Card>
      )}
    </>
  );
};
export default Todo;
