import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  size = ButtonSize.M,
  square,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      {...otherProps}
      className={classNames(cls.button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
    >
      {children}
    </button>
  );
};
