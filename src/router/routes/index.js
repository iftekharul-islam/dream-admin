// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";

import AnalyticsRoute from "@src/views/Analytics/Route";
import CRBTRoute from "@src/views/Appearances/CRBT/Route";
import FormatsRoute from "@src/views/Appearances/Formats/Route";
import GenresRoute from "@src/views/Appearances/Genres/Route";
import LanguagesRoute from "@src/views/Appearances/Languages/Route";
import ParentalAdvisoriesRoute from "@src/views/Appearances/ParentalAdvisories/Route";
import SubgenresRoute from "@src/views/Appearances/Subgenres/Route";
import AudiosRoute from "@src/views/Audios/Route";
import CallerTunesRoute from "@src/views/CallerTunes/Route";
import DepositHistoryRoute from "@src/views/Earnings/DepositHistory/Route";
import WithdrawHistoryRoute from "@src/views/Earnings/WithdrawHistory/Route";
import SupportCentersRoute from "@src/views/SupportCenters/Route";
import ArtistsRoute from "@src/views/UserApprearances/Artists/Route";
import LabelsRoute from "@src/views/UserApprearances/Labels/Route";
import UsersRoute from "@src/views/Users/Route";
import ArtistChannelsRoute from "@src/views/YoutubeRequests/ArtistChannels/Route";
import ClaimReleasesRoute from "@src/views/YoutubeRequests/ClaimReleases/Route";
import ContentIdsRoute from "@src/views/YoutubeRequests/ContentIds/Route";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/login";

const Home = lazy(() => import("../../views/Home"));
const SecondPage = lazy(() => import("../../views/SecondPage"));
const Login = lazy(() => import("../../views/Auth/Login"));
const Register = lazy(() => import("../../views/Register"));
const ForgotPassword = lazy(() => import("../../views/ForgotPassword"));
const Error = lazy(() => import("../../views/Error"));

// ** Merge Routes
const Routes = [
  ...LanguagesRoute,
  ...GenresRoute,
  ...SubgenresRoute,
  ...FormatsRoute,
  ...ParentalAdvisoriesRoute,
  ...LabelsRoute,
  ...ArtistsRoute,
  ...UsersRoute,
  ...AudiosRoute,
  ...CallerTunesRoute,
  ...SupportCentersRoute,
  ...ClaimReleasesRoute,
  ...ContentIdsRoute,
  ...ArtistChannelsRoute,
  ...CRBTRoute,
  ...WithdrawHistoryRoute,
  ...DepositHistoryRoute,
  ...AnalyticsRoute,
  {
    path: "/",
    index: true,
    element: (
      <Navigate
        replace
        to={localStorage.getItem("accessToken") ? "/user" : DefaultRoute}
      />
    ),
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, Routes, TemplateTitle, getRoutes };
