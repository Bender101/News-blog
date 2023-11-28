import React from "react";
import { useTranslation } from "react-i18next";
import { Counter } from "@/entities/Counter";
import { Page } from "@/widgets/Page";
import { RatingCard } from "@/entities/Rating";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <Page data-testid="MainPage">
      {t("main")}
      <div>
        <Counter />
        <RatingCard hasFeedback />
      </div>
    </Page>
  );
};

export default MainPage;
