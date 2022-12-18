import baseApi from "../baseApi";
import { errorHandler } from "../../utilities/notification";
class ClientLoginApi extends baseApi {
  baseUrl = "/login";

  getClientLogin = async () => {
    try {
      const response = await this.Axios.post(`${this.baseUrl}/client/`)
      return response.data;
    } catch (error) {
      errorHandler(error)
    }
  }
}
export default ClientLoginApi;