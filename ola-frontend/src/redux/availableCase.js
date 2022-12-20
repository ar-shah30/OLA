import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    availableCases: {},
}

export const availableCasesSlice = createSlice({
    name: 'AVAILABLE_CASES',
    initialState,
    reducers: {
        availableCasesState: (state, action) => {
            state.availableCases = action.payload
        },
    },
})

export const { availableCasesState } = availableCasesSlice.actions

export default availableCasesSlice.reducer