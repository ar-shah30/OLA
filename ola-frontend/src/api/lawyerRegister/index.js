/* It's a class that contains methods that make API calls to the backend */
import baseApi from "../baseApi";
import { errorHandler } from "../../utilities/notification";
class LawyerRegisterApi extends baseApi {
  baseUrl = "/signup";

  postLawyerRegister = async (data) => {
    try {
      const response = await this.Axios.post(`${this.baseUrl}/lawyer/`, data)
      return response.data;
    } catch (error) {
      errorHandler(error)
    }
  }
}
export default LawyerRegisterApi;