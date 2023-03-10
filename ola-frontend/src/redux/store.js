import { configureStore } from '@reduxjs/toolkit'
import clientLoginReducer from './clientLogin'
import clientRegisterReducer from './clientRegister'
import lawyerLoginReducer from './lawyerLogin'
import lawyerRegisterReducer from './lawyerRegister'
import addCaseReducer from './addCase'
import availableCasesReducer from './availableCase'

export const store = configureStore({
  reducer: {
    clientLogin: clientLoginReducer,
    lawyerLogin: lawyerLoginReducer,
    clientRegister: clientRegisterReducer,
    lawyerRegister: lawyerRegisterReducer,
    addCase: addCaseReducer,
    availableCases: availableCasesReducer,
  },
})