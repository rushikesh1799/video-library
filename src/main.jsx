import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import {
    getAllVideoCategories,
    getAllVideos,
} from "./features/video/videoSlice.js";

store.dispatch(getAllVideos());
store.dispatch(getAllVideoCategories());

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);
