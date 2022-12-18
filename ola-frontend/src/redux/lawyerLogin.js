import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lawyerLogin: {},
}

export const lawyerLoginSlice = createSlice({
    name: 'CLIENT_LOGIN',
    initialState,
    reducers: {
        lawyerLoginState: (state, action) => {
            state.lawyerLogin = action.payload
        },
    },
})

export const { lawyerLoginState } = lawyerLoginSlice.actions

export default lawyerLoginSlice.reducer