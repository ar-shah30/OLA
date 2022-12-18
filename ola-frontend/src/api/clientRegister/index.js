import baseApi from "../baseApi";
import { errorHandler } from "../../utilities/notification";
class ClientRegisterApi extends baseApi {
  baseUrl = "/signup";

  postClientRegister = async (data) => {
    try {
      const response = await this.Axios.post(`${this.baseUrl}/client/`, data)
      return response.data;
    } catch (error) {
      errorHandler(error)
    }
  }
}
export default ClientRegisterApi;