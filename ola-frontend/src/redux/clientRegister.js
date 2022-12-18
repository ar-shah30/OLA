import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clientRegister: {},
}

export const clientRegisterSlice = createSlice({
    name: 'CLIENT_LOGIN',
    initialState,
    reducers: {
        clientRegisterState: (state, action) => {
            state.clientRegister = action.payload
        },
    },
})

export const { clientRegisterState } = clientRegisterSlice.actions

export default clientRegisterSlice.reducer