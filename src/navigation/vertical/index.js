import { Circle, Cpu, Music, Settings, Users } from "react-feather";

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
];
