import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lawyerRegister: {},
}

export const lawyerRegisterSlice = createSlice({
    name: 'LAWYER_LOGIN',
    initialState,
    reducers: {
        lawyerRegisterState: (state, action) => {
            state.lawyerRegister = action.payload
        },
    },
})

export const { lawyerRegisterState } = lawyerRegisterSlice.actions

export default lawyerRegisterSlice.reducer