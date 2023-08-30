import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { SVGProps, VFC } from "react";
import AboutIcon from "../../../shared/assets/icons/About.svg";
import MainIcon from "../../../shared/assets/icons/Home.svg";
import ProfileIcon from "../../../shared/assets/icons/profile-20-20.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon?: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "main",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "about",
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "profile_page",
  },
];
