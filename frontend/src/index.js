import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ChatProvider from "./Context/ChatProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ChatProvider>
    <App />
    </ChatProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

