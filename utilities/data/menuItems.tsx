import { IAsideMenuItem, ITopMenuItems } from "@interfaces/IMenuItems";
import { EAccessTypes } from "@constants/EAccessTypes";

export const topMenuItems: ITopMenuItems[] = [
  {
    title: "Home",
    icon: "/assets/icons/home.svg",
    fontIcon: "fa fas-home",
    backgroundColor: "white",
    hoverColor: "light-success",
    textColor: "black",
    hoverTextColor: "success",
    iconFontColor: "success",
    hoverIconFontColor: "success",
  },
  {
    title: "About Us",
    icon: "/assets/icons/info.svg",
    fontIcon: "fa fas-info",
    backgroundColor: "white",
    hoverColor: "light-success",
    textColor: "black",
    hoverTextColor: "success",
    iconFontColor: "success",
    hoverIconFontColor: "success",
  },
];

export const asideMenuItems: IAsideMenuItem[] = [
  {
    title: "Dashboard",
    fontIcon: "fa fas-home",
    icon: "/assets/icons/home.svg",
    to: "/dashboard",
    hasSubItems: false,
  },
  {
    hasSubItems: false,
    title: "Divider",
    to: "#",
    isSeparator: true,
  },
  {
    title: "Users",
    fontIcon: "fa fas-user",
    icon: "/assets/icons/user.svg",
    to: "#",
    hasBullet: false,
    access: EAccessTypes.READ_ADMIN_USERS,
    hasSubItems: true,
    subItems: [
      {
        title: "New User",
        hasSubItems: false,
        to: "/addUser",
        hasBullet: true,
        access: EAccessTypes.WRITE_ADMIN_USERS,
      },
      {
        title: "Users List",
        hasSubItems: false,
        to: "/usersList",
        hasBullet: true,
        access: EAccessTypes.READ_ADMIN_USERS,
      },
    ],
  },
];
