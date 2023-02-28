import Form from "react-bootstrap/Form";
import { statesList } from "../data/statesList.js";

function Select({ options, label, valueInput, setValueInput }) {
  return (
    <Form.Select
      htmlSize="1"
      aria-label={label}
      onChange={(e) => setValueInput(e.target.value)}
      value={valueInput}
      required
    >
      <option value="">Select a {label}</option>
      {/* {options.map((stateObj) => {
        if (options === statesList) {
            return (
                <option
                key={stateObj.abbreviation}
                value={stateObj.name}
                >
                {stateObj.name}
              </option>
            )
        } else
        console.log(stateObj);
        return (
          <option key={stateObj.value} value={stateObj.value}>
            {stateObj.value}
          </option>
        );
      })} */}

      {options === statesList

        ? options.map((stateObj) => (
            <option key={stateObj.abbreviation} value={stateObj.name}>
              {stateObj.name}
            </option>
          ))

        : options.map((stateObj) => (
            <option key={stateObj.value} value={stateObj.value}>
              {stateObj.value}
            </option>
          ))}
    </Form.Select>
  );
}

export default Select;
