import formats from "@src/views/Appearances/Formats/store";
import genres from "@src/views/Appearances/Genres/store";
import languages from "@src/views/Appearances/Languages/store";
import parentalAdvisories from "@src/views/Appearances/ParentalAdvisories/store";
import subgenres from "@src/views/Appearances/Subgenres/store";
import artists from "@src/views/UserApprearances/Artists/store";
import labels from "@src/views/UserApprearances/Labels/store";
import users from "@src/views/Users/store";

import Auth from "@src/views/Auth/store";
import layout from "./layout";
import navbar from "./navbar";

const rootReducer = {
  navbar,
  layout,
  Auth,  
  users,
  languages,
  genres,
  subgenres,
  formats,
  parentalAdvisories,
  labels,
  artists

};

export default rootReducer;
