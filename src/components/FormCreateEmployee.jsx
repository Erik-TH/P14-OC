import { useState } from "react";
import { useDispatch } from "react-redux";

import { addEmployee } from "../features/employeeSlice";

import { statesList } from "../data/statesList.js";
import { departmentsList } from "../data/departmentsList";

import { HrnetModal } from "@erik-th/hrnet-modal";

import Select from "./Select";
import DatePicker from "./DatePicker";

import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FormCreateEmployee() {
  const dispatch = useDispatch();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [validated, setValidated] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const hrnetModalMessage = "Employee created";

  const newEmployee = [
    {
      firstname,
      lastname,
      birthdate,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    },
  ];

  const handleFormSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      e.preventDefault();
      setOpenModal((toggle) => !toggle);
      dispatch(addEmployee({ newEmployee }));
    }
  };

  const content = (
    <>
      <Container fluid className="transparent p-3 ">
        <h2 className="h2 text-center text-dark m-3">Create employee</h2>

        <Col xs={10} md={7} className="m-auto">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleFormSubmit}
            className="w-100 mb-5 mt-2 shadow border border-dark transparent rounded m-auto p-4"
          >
            <Row>
              <Form.Label className="mb-2">General informations</Form.Label>

              <Col>
                <Form.Group controlId="validationCustom01">
                  <Form.Label visuallyHidden>Firstname</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    className="mb-2"
                    placeholder="First name"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    required
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="validationCustom02">
                  <Form.Label visuallyHidden>Lastname</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    className="mb-2"
                    placeholder="Last name"
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <InputGroup hasValidation size="sm" className="mb-2">
              <InputGroup.Text>Date of birth</InputGroup.Text>
              {/* <Form.Control
                type="date"
                aria-label="Date of birth"
                onChange={(e) => setBirthdate(e.target.value)}
                value={birthdate}
                required
              /> */}
              <DatePicker
                label="Date of Birth"
                valueInput={birthdate}
                setValueInput={setBirthdate}
              />
            </InputGroup>

            <InputGroup hasValidation size="sm" className="mb-2">
              <InputGroup.Text>Hiring date</InputGroup.Text>
              {/* <Form.Control
                type="date"
                aria-label="Hiring date"
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
                required
              /> */}
              <DatePicker
                label="Hiring date"
                valueInput={startDate}
                setValueInput={setStartDate}
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text>Department</InputGroup.Text>
              {/* <Form.Select
                htmlSize="1"
                aria-label="department"
                onChange={(e) => setSelectedDepartment(e.target.value)}
                value={department}
                required
              >
                <option value="">Select a department</option>
                {departmentsList.map((stateObj, index) => {
                  return (
                    <option key={index} value={stateObj.value}>
                      {stateObj.value}
                    </option>
                  );
                })}
              </Form.Select> */}
              <Select
                label="department"
                valueInput={department}
                setValueInput={setDepartment}
                options={departmentsList}
              />
            </InputGroup>

            <Form.Group className="mb-1" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                size="sm"
                placeholder="Street"
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                required
              />
            </Form.Group>

            <Row className="mb-1">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  placeholder="City"
                  size="sm"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Control
                  size="sm"
                  type="number"
                  placeholder="Zip Code"
                  onChange={(e) => setZipCode(e.target.value)}
                  value={zipCode}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text>State</InputGroup.Text>
                  {/* <Form.Select
                    htmlSize="1"
                    aria-label="State"
                    label="State"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                    required
                  >
                    <option value="">Select a State</option>
                    {statesList.map((stateObj) => {
                      return (
                        <option
                          key={stateObj.abbreviation}
                          value={stateObj.name}
                        >
                          {stateObj.name}
                        </option>
                      );
                    })}
                  </Form.Select> */}
                  <Select
                    label="state"
                    valueInput={state}
                    setValueInput={setState}
                    options={statesList}
                  />
                </InputGroup>
              </Form.Group>
            </Row>

            <Col className="text-center">
              <Button size="sm" variant="outline-dark" type="submit">
                Save
              </Button>
            </Col>
          </Form>
        </Col>
      </Container>

      <HrnetModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        hrnetModalMessage={hrnetModalMessage}
      />
    </>
  );

  return content;
}

export default FormCreateEmployee;
