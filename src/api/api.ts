// <PanelHeader
//   before={<PanelHeaderBack onClick={go} data-to="home" />}
// ></PanelHeader>;

const axios = require("axios");

const api = axios.create({
  baseURL: "http://anabasis.pro:1337/api",
  headers: {
    Authrization: "Bearer ${process.env.token}"
  }
});
