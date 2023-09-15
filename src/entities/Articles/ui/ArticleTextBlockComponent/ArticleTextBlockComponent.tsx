import cls from "entities/Articles/ui/ArticleTextBlockComponent/ArticleTextBlockComponent.module.scss";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = memo(
  ({ className }: ArticleTextBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        acs
      </div>
    );
  }
);
