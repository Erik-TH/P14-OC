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

const { actions, reducer } = employeeSlice
export const { addEmployee } = actions
export default reducer