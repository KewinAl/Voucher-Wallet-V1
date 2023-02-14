import axios from "axios";
import store from "../Store/rootStore";

let baseUrl;

if (process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:8000/backend/api/";
  // baseUrl = 'https://voucher-wallet.propulsion-learn.ch/backend/api/'
} else {
  baseUrl = "https://voucher-wallet.propulsion-learn.ch/backend/api/";
}

// creating a custom instance of axios make fetches more convenient by giving custom defaults
const axiosInstance = axios.create({
  baseUrl: baseUrl,
});

axiosInstance.defaults.baseURL = baseUrl;
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

// Intercept every Axios request and include the Bearer token stored in redux
// this keeps your fetches DRY, as you need to include the Bearer with every request anyway (excluding registration)
axiosInstance.interceptors.request.use(function (config) {
  const token = store.getState().auth.accesstoken; // remember: there is nothing stopping us to access redux state like in the beginning
  config.headers.Authorization = "Bearer " + token;
  return config;
});

// Use the axios instance exported from here instead of importing the default one when fetching data
export default axiosInstance;
