import cls from "./SideBar.module.scss";
import { useState, useMemo, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useSelector } from "react-redux";
import { getSideBarItems } from "../../model/selectors/getSideBarItems";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppLogo } from "@/shared/ui/deprecated/AppLogo";

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const sidebarItemsList = useSelector(getSideBarItems);

  const collapseHandler = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, sidebarItemsList]
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsed]: collapsed },
            [className]
          )}
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
        >
          <Button
            data-testid="sidebar-toggle"
            onClick={collapseHandler}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            size={ButtonSize.L}
            square
          >
            {collapsed ? ">" : "<"}
          </Button>
          <VStack role="navigation" gap="8" className={cls.items}>
            {itemsList}
          </VStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
        </aside>
      }
    />
  );
});
