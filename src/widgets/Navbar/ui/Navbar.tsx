import cls from "./Navbar.module.scss";
import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {

  return <div className={classNames(cls.navbar, {}, [className])}></div>;
};
