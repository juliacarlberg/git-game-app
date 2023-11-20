import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./index.scss";
import { AboutUsPage } from "./pages/AboutUsPage";
import { GamePage } from "./pages/GamePage";
import { Home } from "./pages/Home";
import { Ch1Lvl4 } from "./components/chapter-1/levels/Ch1Lvl4";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Ch1Lvl1 } from "./components/chapter-1/levels/Ch1Lvl1";
import { Ch1Lvl2 } from "./components/chapter-1/levels/Ch1Lvl2";

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
  {
    path: "/level-one",
    element: <Ch1Lvl1></Ch1Lvl1>,
  },
  {
    path: "/level-two",
    element: <Ch1Lvl2></Ch1Lvl2>,
  },
  {
    path: "/level-four",
    element: <Ch1Lvl4></Ch1Lvl4>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  </React.StrictMode>
);
