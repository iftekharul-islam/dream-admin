// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const Route = [
  {
    element: <List />,
    path: "/content-id-request",
  }
];

export default Route;
