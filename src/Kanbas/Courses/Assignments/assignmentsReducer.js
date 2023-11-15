// import db from "../../Database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    assignment: {title: "New Assignment"}
};

const assignmentsslice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        selectAssignments: (state, action) => {
            state.assignments = action.payload;
          },
        addAssignment: (state, action) => {
            state.assignments = [{...action.payload, _id: new Date().getTime().toString()}
            , ...state.assignments];
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
            , 
        resetAssignment: (state) => {
            state.assignment = initialState.assignment
            }
        }
    });

export const {addAssignment, deleteAssignment, updateAssignment,
                selectAssignment, resetAssignment, selectAssignments} = assignmentsslice.actions;
export default assignmentsslice.reducer;