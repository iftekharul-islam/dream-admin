import { Circle, Settings, Users } from "react-feather";

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
    id: "appearance",
    title: "Appearances",
    icon: <Settings size={20} />,
    isAccess: true,
    children: [
      {
        id: "purchase_product",
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
        navLink: "/vendor",
      },
      {
        id: "genre",
        title: "Subgenres",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/vendor",
      },
      {
        id: "genre",
        title: "Formats",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/vendor",
      },
      {
        id: "genre",
        title: "Parental Advisories",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/vendor",
      },
    ],
  },
  {
    id: "user_appearance",
    title: "User Appearance",
    icon: <Users size={20} />,
    isAccess: true,
    children: [
      {
        id: "purchase_product",
        title: "Artists",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/product",
      },
      {
        id: "vendor",
        title: "Labels",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/vendor",
      },
    ],
  },
];
