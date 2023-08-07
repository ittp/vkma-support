import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ConfigProvider, AppRoot, Footer, Card, Select } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";


const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(
  <StrictMode>
    <ConfigProvider>
      <Card>1</Card>
      <AppRoot>
        <App />

        <Footer>Footer</Footer>
      </AppRoot>
    </ConfigProvider>
  </StrictMode>
);
