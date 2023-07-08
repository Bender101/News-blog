import cls from "./SideBar.module.scss";
import React, { type FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import IconMain from "shared/assets/icons/Home.svg";
import IconAbout from "shared/assets/icons/About.svg";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const collapseHandler = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePaths.main}
        >
          <IconMain className={cls.icon} />
          <span className={cls.link}> {t("main")}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePaths.about}
        >
          <IconAbout className={cls.icon} />
          <span className={cls.link}>{t("about")}</span>
        </AppLink>
      </div>
      <Button
        className={cls.collapseBtn}
        size={ButtonSize.L}
        square
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={collapseHandler}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={classNames(cls.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher className={classNames(cls.lang)} />
      </div>
    </div>
  );
};
