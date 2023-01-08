/* It's a class that extends the baseApi class and has a method that makes a get request to the backend
to get the available cases for a client */
import baseApi from "../baseApi";
import { errorHandler } from "../../utilities/notification";
class AvailableCasesApi extends baseApi {
  baseUrl = "/client";

  getAvailableCases = async(id) => {
    try {
      const response = await this.Axios.get(`${this.baseUrl}/get-cases/${id}`)
      return response.data;
    } catch (error) {
      errorHandler(error)
    }
  }
}
export default AvailableCasesApi;