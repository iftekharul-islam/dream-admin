import {
  Circle,
  Cpu,
  DollarSign,
  Headphones,
  Music,
  Settings,
  Triangle,
  Users,
  Youtube,
} from "react-feather";

const check = (permission) => {
  const permissions = JSON.parse(localStorage.getItem("permissions"));
  if (permission) {
    if (permissions?.some((value) => permission.includes(value))) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

export default [
  {
    id: "user",
    title: "Users",
    icon: <Users size={20} />,
    isAccess: true,
    navLink: "/user",
  },
  {
    id: "audio",
    title: "Audios",
    icon: <Music size={20} />,
    isAccess: true,
    navLink: "/audio",
  },
  {
    id: "caller_tunes",
    title: "Caller Tunes",
    icon: <Music size={20} />,
    isAccess: true,
    navLink: "/caller-tunes",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <Triangle size={20} />,
    isAccess: true,
    navLink: "/analytics",
  },
  {
    id: "youtube_request",
    title: "Youtube Requests",
    icon: <Youtube size={20} />,
    isAccess: true,
    children: [
      {
        id: "claim_release",
        title: "Claim Release",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/claim-release",
      },
      {
        id: "content_id_request",
        title: "Content Id",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/content-id-request",
      },
      {
        id: "artist_channel_request",
        title: "Artist Channel",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/channel-request",
      },
    ],
  },
  {
    id: "earning",
    title: "Earnings",
    icon: <DollarSign size={20} />,
    isAccess: true,
    children: [
      {
        id: "deposit_history",
        title: "Deposit History",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/deposit-history",
      },
      {
        id: "withdraw_history",
        title: "Withdraw History",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/withdraw-history",
      },
    ],
  },
  {
    id: "appearance",
    title: "Appearances",
    icon: <Settings size={20} />,
    isAccess: true,
    children: [
      {
        id: "language",
        title: "Languages",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/language",
      },
      {
        id: "genre",
        title: "Genres",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/genre",
      },
      {
        id: "subgenre",
        title: "Subgenres",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/subgenre",
      },
      {
        id: "format",
        title: "Formats",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/format",
      },
      {
        id: "parental_advisory",
        title: "Parental Advisories",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/parental-advisory",
      },
      {
        id: "crbt",
        title: "CRBT",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/crbt",
      },
    ],
  },
  {
    id: "user_appearance",
    title: "User Appearances",
    icon: <Cpu size={20} />,
    isAccess: true,
    children: [
      {
        id: "artist",
        title: "Artists",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/artist",
      },
      {
        id: "label",
        title: "Labels",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/label",
      },
    ],
  },
  {
    id: "support_center",
    title: "Support Center",
    icon: <Headphones size={20} />,
    isAccess: true,
    navLink: "/support-center",
  },
];
