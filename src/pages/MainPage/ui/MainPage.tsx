import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const MainPage = () => {
  const { t } = useTranslation("main");

  return <Page data-testid="MainPage">
    <div>{t("main")}</div>
    <div>Логин, пароль:</div>
    <div>1. admin, 123</div>
    <div>2. user,123</div>
  </Page>;
};

export default MainPage;
