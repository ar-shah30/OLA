import baseApi from "../baseApi";
import { errorHandler } from "../../utilities/notification";
class ClientRegisterApi extends baseApi {
  baseUrl = "/signup";

  postClientRegister = async () => {
    try {
      const response = await this.Axios.post(`${this.baseUrl}/client/`)
      return response.data;
    } catch (error) {
      errorHandler(error)
    }
  }
}
export default ClientRegisterApi;