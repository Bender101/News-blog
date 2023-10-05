import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleListItemSkeleton } from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import { TextSize, Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation();
  const { className, articles, view = ArticleView.SMALL, isLoading } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
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
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
