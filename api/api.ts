// <PanelHeader
//   before={<PanelHeaderBack onClick={go} data-to="home" />}
// ></PanelHeader>;

const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api_url/api",
  headers: {
    Authrization: "Bearer ${process.env.token}"
  }
});

async () => { 
  let devices = await api.get('/devices')
}

export defaults = { 
 api
}