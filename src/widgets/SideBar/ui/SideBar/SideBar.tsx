import cls from "./SideBar.module.scss";
import { type FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
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
      <button data-testid="sidebar-toggle" onClick={collapseHandler}>ВЖУХ</button>
      <div className={classNames(cls.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher className={classNames(cls.lang)} />
      </div>
    </div>
  );
};
