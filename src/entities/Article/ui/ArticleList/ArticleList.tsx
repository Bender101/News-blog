import { classNames } from "@/shared/lib/classNames/classNames";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { ArticleListItemSkeleton } from "../../ui/ArticleListItem/ArticleListItemSkeleton";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";
import { Article } from "../../model/types/article";
import { TextSize, Text } from "@/shared/ui/Text";
import { useTranslation } from "react-i18next";
import { ArticleView } from "../../model/consts/consts";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation();
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t("articles_not_found")} />
      </div>
    );
  }

  return (
    <div
      data-testid="ArticleList"
      className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
