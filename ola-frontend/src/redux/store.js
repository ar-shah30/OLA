import { configureStore } from '@reduxjs/toolkit'
import clientLoginReducer from './clientLogin'
import clientRegisterReducer from './clientRegister'

export const store = configureStore({
  reducer: {
    clientLogin: clientLoginReducer,
    clientRegister: clientRegisterReducer,
  },
}) 