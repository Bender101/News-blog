import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import AboutIcon from "@/shared/assets/icons/About.svg";
import MainIcon from "@/shared/assets/icons/Home.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "@/shared/assets/icons/article-20-20.svg";
import { SidebarItemType } from "../types/sidebar";

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
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
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: `${RoutePath.profile}${userData?.id}`,
        Icon: ProfileIcon,
        text: "profile_page",
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: "articles_page",
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
