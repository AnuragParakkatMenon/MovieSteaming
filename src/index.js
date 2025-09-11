import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import appStore from "./utils/appStore";
import Login from "./Login";
import Browse from "./Browse";
import App from "./App";   
import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,   
    children: [
      { path: "/", element: <Login /> },
      { path: "/browse", element: <Browse /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);