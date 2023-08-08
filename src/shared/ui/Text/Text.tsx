import cls from "./Text.module.scss";
import { FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: ReactNode;
  text?: ReactNode;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  theme = TextTheme.PRIMARY,
}) => {
  return (
    <div className={classNames(cls.text, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
