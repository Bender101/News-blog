import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
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
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo(
  ({
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    size = ButtonSize.M,
    square,
    disabled,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = {
      [cls.square]: square,
      [cls.disabled]: disabled,
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
  }
);
