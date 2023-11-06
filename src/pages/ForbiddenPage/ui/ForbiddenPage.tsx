import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page/Page";

const ForbiddenPage = () => {
  const { t } = useTranslation();

  return <Page>{t("you_cannot_access_this_page")}</Page>;
};

export default ForbiddenPage;
