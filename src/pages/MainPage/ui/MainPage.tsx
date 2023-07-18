import React from "react";
import { useTranslation } from "react-i18next";
import { Counter } from "entities/Counter";

const MainPage = () => {
  const { t } = useTranslation("main");

  return (
    <div>
      {t("main")}
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default MainPage;
