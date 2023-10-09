import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./index.scss";
import { AboutUsPage } from "./pages/AboutUsPage";
import { GamePage } from "./pages/GamePage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/gitgame",
    element: <GamePage></GamePage>,
  },
  {
    path: "/aboutus",
    element: <AboutUsPage></AboutUsPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
