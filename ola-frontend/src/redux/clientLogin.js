import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clientLogin: {},
}

export const clientLoginSlice = createSlice({
    name: 'CLIENT_LOGIN',
    initialState,
    reducers: {
        clientLoginState: (state, action) => {
            state.clientLogin = action.payload
        },
    },
})

export const { clientLoginState } = clientLoginSlice.actions

export default clientLoginSlice.reducer