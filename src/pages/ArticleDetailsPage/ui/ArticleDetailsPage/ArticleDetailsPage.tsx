import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./ArticleDetailsPage.module.scss";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "entities/Article";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams();
  const { t } = useTranslation('article-details');

  if (!id) {
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          {t('article_loading_error')}
        </div>
    );
  }


  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
