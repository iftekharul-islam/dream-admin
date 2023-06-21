// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));
const View = lazy(() => import("./view"));

const Route = [
  {
    element: <List />,
    path: "/audio",
  },
  {
    element: <View />,
    path: "/audio/:id",
  }
];

export default Route;
