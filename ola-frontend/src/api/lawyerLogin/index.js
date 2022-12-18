import baseApi from "../baseApi";
import { errorHandler } from "../../utilities/notification";
class LawyerLoginApi extends baseApi {
  baseUrl = "/login";

  getLawyerLogin = async (data) => {
    try {
      const response = await this.Axios.post(`${this.baseUrl}/lawyer/`, data)
      return response.data;
    } catch (error) {
      errorHandler(error)
    }
  }
}
export default LawyerLoginApi;