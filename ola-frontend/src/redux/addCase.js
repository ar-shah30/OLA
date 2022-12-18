import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addCase: {},
}

export const addCaseSlice = createSlice({
    name: 'CLIENT_LOGIN',
    initialState,
    reducers: {
        addCaseState: (state, action) => {
            state.addCase = action.payload
        },
    },
})

export const { addCaseState } = addCaseSlice.actions

export default addCaseSlice.reducer