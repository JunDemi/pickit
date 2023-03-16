import axios from "axios";
import commonService from "./commonService";

// TODO: axios요청헤더 수정필요
const api = axios.create({
  baseURL: "",
  timeout: 60000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
});

export default api;
export { commonService };
