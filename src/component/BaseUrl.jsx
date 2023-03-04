import axios from "axios";
const AxiosUrl = axios.create({
  baseURL: "http://37.32.4.134",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});
export default AxiosUrl;
