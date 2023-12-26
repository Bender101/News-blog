import React, { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui/Button";

enum Locale {
  RU = "ru",
  EN = "en",
}

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const changeLang = () =>
    i18n.changeLanguage(i18n.language === Locale.RU ? Locale.EN : Locale.RU);

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={changeLang}
    >
      {/* TODO переводы*/}
      {t(short ? "Короткий язык" : "Язык")}
    </Button>
  );
});
