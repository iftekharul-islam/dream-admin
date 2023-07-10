// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));
const View = lazy(() => import("./view"));

const Route = [
  {
    element: <List />,
    path: "/caller-tunes",
  },
  
  {
    element: <View />,
    path: "/caller-tunes/:id",
  }
];

export default Route;
