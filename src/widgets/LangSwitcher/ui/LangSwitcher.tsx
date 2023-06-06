import cls from "./LangSwitcher.module.scss";
import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

enum Locale {
  RU = "ru",
  EN = "en",
}

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const changeLang = () =>
    i18n.changeLanguage(i18n.language === Locale.RU ? Locale.EN : Locale.RU);

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={changeLang}
    >
      {t("lang")}
    </Button>
  );
};
