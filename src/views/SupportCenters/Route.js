// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));
const View = lazy(() => import("./view"));

const Route = [
  {
    element: <List />,
    path: "/support-center",
  },
  {
    element: <View />,
    path: "/support-center/:id",
  }
];

export default Route;
