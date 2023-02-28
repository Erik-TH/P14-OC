import Form from "react-bootstrap/Form";

function DatePicker({ label, valueInput, setValueInput }) {
  return (
    <Form.Control
    type="date"
    aria-label={label}
    onChange={(e) => setValueInput(e.target.value)}
    value={valueInput}
    required
  />
  );
}

export default DatePicker;
