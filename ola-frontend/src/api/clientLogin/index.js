import baseApi from "../baseApi";
import { errorHandler } from "../../utilities/notification";
class ClientLoginApi extends baseApi {
  baseUrl = "/login";

  getClientLogin = async (data) => {
    try {
      const response = await this.Axios.post(`${this.baseUrl}/client/`, data)
      return response.data;
    } catch (error) {
      errorHandler(error)
    }
  }
}
export default ClientLoginApi;