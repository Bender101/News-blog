import cls from "./AppLink.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

/**
 * Устарел, использовать компоненты из папки redesigned
 @deprecated
 */
export const AppLink: FC<AppLinkProps> = ({
  className,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...otherProps
}) => {
  return (
    <Link
      {...otherProps}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
