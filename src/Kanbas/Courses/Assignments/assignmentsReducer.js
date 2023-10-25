import db from "../../Database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: db.assignments,
    assignment: {title: "New Assignment"}
};

const assignmentsslice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [...state.assignments,
            {...action.payload, _id: new Date().getTime().toString()}];
            // reset assignment state
            state.assignment = initialState.assignment;
            }
            ,
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(assignment => assignment._id !== action.payload);
             // reset assignment state
             state.assignment = initialState.assignment;
            },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map(assignment => 
                {if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {return assignment}
            });
            // reset assignment state
            state.assignment = initialState.assignment;
            },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
            }
        }  
    });

export const {addAssignment, deleteAssignment, updateAssignment,
                selectAssignment} = assignmentsslice.actions;
export default assignmentsslice.reducer;