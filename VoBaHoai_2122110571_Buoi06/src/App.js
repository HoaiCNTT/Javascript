import * as React from "react";
import { useRoutes } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite"
import LayoutAdmin from "./layouts/LayoutAdmin"
import NoPage from "./pages/NoPage"
import RouterApp from "./routers";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children: RouterApp.RouterSite,
     },
    {
      path: "admin",
      element: <LayoutAdmin />,
      children: RouterApp.RouterAdmin,
    },
    {
      path: "*",
      element: <NoPage />,
    },
      ]);
  return element;
}
export default App;