import { EAccessTypes } from "@constants/EAccessTypes";

export interface ITopMenuItems {
  title: string;
  icon: string;
  fontIcon: string;
  backgroundColor: string;
  hoverColor: string;
  textColor: string;
  hoverTextColor: string;
  iconFontColor: string;
  hoverIconFontColor: string;
}

export interface IAsideMenuItem {
  title: string;
  to: string;
  fontIcon?: string;
  icon?: string;
  hasSubItems: boolean;
  isSeparator?: boolean;
  hasBullet?: boolean;
  access?: EAccessTypes;
  subItems?: IAsideMenuItem[];
}
