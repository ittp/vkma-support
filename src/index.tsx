import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import { ConfigProvider, AppRoot, Footer, View, Group } from "@vkontakte/vkui";

import "@vkontakte/vkui/dist/vkui.css";


//const { createRoot } = require('react-dom')/

import App from "./App";



//const rootElement = document.getElementById("root")


//const root = ReactDOMClient.createRoot(rootElement);
const root = ReactDOM.createRoot(document.getElementById("root")!)
// as Element);


root.render(
//  <Strictode>
    <ConfigProvider>
      <AppRoot>
        <App />
      </AppRoot>
    </ConfigProvider>
//  </StrictMode>
);
