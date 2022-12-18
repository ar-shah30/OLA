import baseApi from "../baseApi";
import { errorHandler } from "../../utilities/notification";
class AddCaseApi extends baseApi {
  baseUrl = "/client";

  getAddCase = async (data) => {
    try {
      const response = await this.Axios.post(`${this.baseUrl}/place-case/`, data)
      console.log(response);
      return response.data;
    } catch (error) {
      errorHandler(error)
    }
  }
}
export default AddCaseApi;