// ** React Imports
import { lazy } from "react";

const View = lazy(() => import("./view"));

const Route = [
  {
    element: <View />,
    path: "/settings",
  }
];

export default Route;
