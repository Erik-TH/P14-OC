import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeesList: [],
};

const employeeSlice = createSlice({
    name: "employee",
    initialState,

    reducers: {
        addEmployee: (state, { payload }) =>{
            state.employeesList.push(payload);
        },
    },
})

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
