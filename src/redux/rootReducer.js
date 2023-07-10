import crbts from "@src/views/Appearances/CRBT/store";
import formats from "@src/views/Appearances/Formats/store";
import genres from "@src/views/Appearances/Genres/store";
import languages from "@src/views/Appearances/Languages/store";
import parentalAdvisories from "@src/views/Appearances/ParentalAdvisories/store";
import subgenres from "@src/views/Appearances/Subgenres/store";
import audios from "@src/views/Audios/store";
import callerTunes from "@src/views/CallerTunes/store";
import deposits from "@src/views/Earnings/DepositHistory/store";
import withdrawals from "@src/views/Earnings/WithdrawHistory/store";
import supportCenters from "@src/views/SupportCenters/store";
import artists from "@src/views/UserApprearances/Artists/store";
import labels from "@src/views/UserApprearances/Labels/store";
import users from "@src/views/Users/store";
import artistChannels from "@src/views/YoutubeRequests/ArtistChannels/store";
import claimReleases from "@src/views/YoutubeRequests/ClaimReleases/store";
import contentIds from "@src/views/YoutubeRequests/ContentIds/store";

import Auth from "@src/views/Auth/store";
import layout from "./layout";
import navbar from "./navbar";

const rootReducer = {
  navbar,
  layout,
  Auth,  
  users,
  audios,
  callerTunes,
  claimReleases,
  contentIds,
  artistChannels,
  languages,
  genres,
  subgenres,
  formats,
  parentalAdvisories,
  labels,
  artists,
  supportCenters,
  crbts,
  withdrawals,
  deposits,
};

export default rootReducer;
