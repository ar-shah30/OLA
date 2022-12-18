import ClientLoginApi from "./clientLogin";
import LawyerLoginApi from "./lawyerLogin";
import ClientRegisterApi from "./clientRegister";
import LawyerRegisterApi from "./lawyerRegister";
import AddCaseApi from "./addCase";

export const baseURL = "http://127.0.0.1:8000";

export const clientLoginApi = new ClientLoginApi(baseURL)
export const lawyerLoginApi = new LawyerLoginApi(baseURL)
export const clientRegisterApi = new ClientRegisterApi(baseURL)
export const lawyerRegisterApi = new LawyerRegisterApi(baseURL)
export const addCaseApi = new AddCaseApi(baseURL)


