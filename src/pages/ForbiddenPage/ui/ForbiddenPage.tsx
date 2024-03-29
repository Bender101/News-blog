import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const ForbiddenPage = () => {
  const { t } = useTranslation();

  return <Page data-testid="ForbiddenPage">{t("you_cannot_access_this_page")}</Page>;
};

export default ForbiddenPage;
