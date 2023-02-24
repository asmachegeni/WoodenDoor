import axios from "axios";
const AxiosUrl = axios.create({
  baseURL: "https://fokolapp.ir",
});
export default AxiosUrl;
