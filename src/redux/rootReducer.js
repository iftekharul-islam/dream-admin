import languages from "@src/views/Appearances/Languages/store";
import Auth from "@src/views/Auth/store";
import layout from "./layout";
import navbar from "./navbar";

const rootReducer = {
  navbar,
  layout,
  Auth,  
  languages,
};

export default rootReducer;
