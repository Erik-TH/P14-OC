import React from "react";
import EmployeesTable from "../components/employeesTable/TableCurrentEmployees";

import Container from "react-bootstrap/Container";

function CurrentEmployees() {
  return (
    <Container fluid className="transparent p-3">
      <h2 className="h2 text-center text-dark m-3">Current Employees</h2>
      <Container className="w-75 mb-5 mt-2 shadow border border-dark transparent rounded m-auto p-4">
        <EmployeesTable />
      </Container>
    </Container>
  );
}

export default CurrentEmployees;
