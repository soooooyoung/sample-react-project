import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import koKR from "antd/es/locale/ko_KR";
import "./index.css";
import App from "./App";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={koKR}>
        <App />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
