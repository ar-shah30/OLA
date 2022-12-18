import ClientLoginApi from "./clientLogin";
import ClientRegisterApi from "./clientRegister";


export const baseURL = "http://127.0.0.1:8000";


export const clientLoginApi = new ClientLoginApi(baseURL)
export const clientRegisterApi = new ClientRegisterApi(baseURL)


