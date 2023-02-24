// 9 columns
// Header : Firstname, Lastname, Start Date, Department, Date of Birth, Street, City, State, Zip Code
// accessor: firstname lastname birthdate start_date department street city state zipCode
import { useMemo, useState, useEffect } from "react";

import {
  useTable,
  usePagination,
  useBlockLayout,
  useGlobalFilter,
  useSortBy,
  useAsyncDebounce,
} from "react-table";

import { useSelector } from "react-redux";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function TableCurrentEmployees() {
  const columns = useMemo(
    () => [
      { Header: "First Name", accessor: "firstname" },
      { Header: "Last Name", accessor: "lastname" },
      { Header: "Date of Birth", accessor: "birthdate" },
      { Header: "Department", accessor: "department" },
      { Header: "Street", accessor: "street" },
      { Header: "City", accessor: "city" },
      { Header: "State", accessor: "state" },
      { Header: "Zip Code", accessor: "zipCode" },
    ],
    []
  );

  // filter table
  const FilterInput = ({ filter, setFilter }) => {
    const [searchInput, setSearchInput] = useState(filter);
    const onChange = useAsyncDebounce((value) => {
      setFilter(value);
    }, 500);

    return (
      <InputGroup size="sm">
        <InputGroup.Text>Search :</InputGroup.Text>
        <Form.Control
          aria-label="Search Employee"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            onChange(e.target.value);
          }}
        />
      </InputGroup>
    );
  };

  const employees = useSelector((state) => state?.employee.employeesList);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      ...employees.map((employee) => {
        return employee.newEmployee[0];
      }),
    ]);
  }, [employees]);

  // react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useBlockLayout,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const firstPageRows = page.slice(0, 100);
  const { pageIndex, pageSize, globalFilter } = state;

  const content = (
    <>
      {/* Headers */}
      <Container>
        <Row className="h-8">
          <Col>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text>Show entries</InputGroup.Text>
              <Form.Select
                htmlSize="1"
                aria-label=""
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[10, 25, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
          </Col>
          <Col>
            <FilterInput filter={globalFilter} setFilter={setGlobalFilter} />
          </Col>
        </Row>
      </Container>

      <Table {...getTableProps()} responsive striped hover size="lg">
        <thead className="text-Center text-capitalize">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " v" : " ^") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Body */}

        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="text-center text-capitalize"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Nav */}

      <Container />
      <Row className="mt-3">
        <Container className="fw-light font-monospace text-center text-sm text-capitalize">
          <Col>
            Page {pageIndex + 1} of {pageOptions.length}
            <InputGroup size="sm" className="justify-content-sm-center mb-3">
              <InputGroup.Text>Go to page : </InputGroup.Text>
              <Form.Control
                className="input__gotoPage"
                aria-label="Go to page"
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              />
            </InputGroup>
          </Col>
        </Container>
        <Container fluid className="mt-1 ">
          <Col className="d-flex justify-content-sm-end fw-light font-monospace text-center text-sm text-capitalize m-1">
            <Button
              className="fw-light font-monospace text-center text-sm text-capitalize m-1"
              size="sm"
              variant="btn-outline-dark"
              type="submit"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"|<<"}
            </Button>
            <Button
              className="fw-light font-monospace text-center text-sm text-capitalize m-1"
              size="sm"
              variant="btn-outline-dark"
              type="submit"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"<"}
            </Button>
            <Button
              className="fw-light font-monospace text-center text-sm text-capitalize m-1"
              size="sm"
              variant="btn-outline-dark"
              type="submit"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {">"}
            </Button>
            <Button
              className="fw-light font-monospace text-center text-sm text-capitalize m-1"
              size="sm"
              variant="btn-outline-dark"
              type="submit"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>|"}
            </Button>
          </Col>
        </Container>
      </Row>
      <Container />
    </>
  );

  return content;
}

export default TableCurrentEmployees;
