import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./index.scss";
import { AboutUsPage } from "./pages/AboutUsPage";
import { GamePage } from "./pages/GamePage";
import { Home } from "./pages/Home";
import { Ch3Lvl4 } from "./components/chapter-3/levels/Ch3Lvl4";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Ch3Lvl1 } from "./components/chapter-3/levels/Ch3Lvl1";
import { Ch3Lvl2 } from "./components/chapter-3/levels/Ch3Lvl2";

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
    element: <Ch3Lvl1></Ch3Lvl1>,
  },
  {
    path: "/level-two",
    element: <Ch3Lvl2></Ch3Lvl2>,
  },
  {
    path: "/level-four",
    element: <Ch3Lvl4></Ch3Lvl4>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  </React.StrictMode>
);
