import cls from "./ArticleCodeBlockComponent.module.scss";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent = memo(
  ({ className }: ArticleCodeBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
      >
        sdcsc
      </div>
    );
  }
);
