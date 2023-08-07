// <PanelHeader
//   before={<PanelHeaderBack onClick={go} data-to="home" />}
// ></PanelHeader>;

import axios, {
  Axios,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosStatic,
  AxiosDefaults,
  AxiosHeaders,
  AxiosAdapter,
  AxiosBasicCredentials,
  AxiosRequestHeaders,
  AxiosInterceptorManager,
} from "axios";

// const axios = require("axios");

// class ApiConfigGlobal extends Axios {
//   constructor(props) {
//     headers: ...AxiosHeaders

//   }

// }
interface Token {}
interface UserAccount {
  
}
// Crypto;
async (token: CryptoKey) => {
  // axios.request
  // axios.post("/auth");
};
const a = require("axios").AxiosDefaults;
const api = a.create({
  baseURL: process.env.API_URL,
  headers: {
    Authrization: "Bearer ${process.env.token}",
  },
});

module.exports = api;
