import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import AboutIconDeprecated from "@/shared/assets/icons/About.svg";
import MainIconDeprecated from "@/shared/assets/icons/Home.svg";
import ProfileIconDeprecated from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIconDeprecated from "@/shared/assets/icons/article-20-20.svg";

import MainIcon from "@/shared/assets/icons/Home.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";
import AboutIcon from "@/shared/assets/icons/Info.svg";
import ProfileIcon from "@/shared/assets/icons/avatar.svg";

import { SidebarItemType } from "../types/sidebar";
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";
import { toggleFeatures } from "@/shared/lib/features";

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
      text: "main",
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: "isAppRedesigned",
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: "about",
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: "profile_page",
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: "isAppRedesigned",
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: "articles_page",
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
