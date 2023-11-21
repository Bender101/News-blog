import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import AboutIcon from "@/shared/assets/icons/About.svg";
import MainIcon from "@/shared/assets/icons/Home.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "@/shared/assets/icons/article-20-20.svg";
import { SidebarItemType } from "../types/sidebar";
import {
  getRouteAbout, getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: "main",
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: "about",
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData?.id),
        Icon: ProfileIcon,
        text: "profile_page",
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: "articles_page",
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
