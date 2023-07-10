// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const Route = [
  {
    element: <List />,
    path: "/crbt",
  }
];

export default Route;
