import cls from "./ArticleImageBlockComponent.module.scss";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = memo(
  ({ className }: ArticleImageBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        csdcsd
      </div>
    );
  }
);
