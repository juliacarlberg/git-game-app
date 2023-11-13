import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./index.scss";
import { AboutUsPage } from "./pages/AboutUsPage";
import { GamePage } from "./pages/GamePage";
import { Home } from "./pages/Home";
import { LevelFour } from "./components/chapter-1/levels/LevelFour";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { LevelOne } from "./components/chapter-1/levels/LevelOne";
import { LevelTwo } from "./components/chapter-1/levels/LevelTwo";

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
    element: <LevelOne></LevelOne>,
  },
  {
    path: "/level-two",
    element: <LevelTwo></LevelTwo>,
  },
  {
    path: "/level-four",
    element: <LevelFour></LevelFour>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>
  </React.StrictMode>
);
