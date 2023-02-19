import employeeReducer from "../features/employeeSlice"

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
    reducer: {
      employee: employeeReducer,
    },
  });