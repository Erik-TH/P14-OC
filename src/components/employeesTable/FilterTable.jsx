import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export const FilterTable = ({ filter, setFilter }) => {
  const [searchInput, setSearchInput] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value);
  }, 1000);

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
