import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  getUserResource,
  getNotificationResource,
  getPreferenceResource,
} from "./resources/userResource";

getUserResource();
getNotificationResource();
getPreferenceResource();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
