/* This is a reducer. */
import { createSlice } from '@reduxjs/toolkit'

/* Setting the initial state of the reducer. */
const initialState = {
    addCase: {},
}

/* Creating a slice of the redux store. */
export const addCaseSlice = createSlice({
    name: 'CLIENT_LOGIN',
    initialState,
    reducers: {
        addCaseState: (state, action) => {
            state.addCase = action.payload
        },
    },
})

/* This is exporting the reducer. */
export const { addCaseState } = addCaseSlice.actions

export default addCaseSlice.reducer