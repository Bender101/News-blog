import cls from "./ArticleDetails.module.scss";
import { memo, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation("article-details");
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text align={TextAlign.CENTER} title={t("article_loading_error")} />
    );
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          // size={TextSize.L}
        />
        {/*<div className={cls.articleInfo}>*/}
        {/*  <Icon className={cls.icon} Svg={EyeIcon} />*/}
        {/*  <Text text={String(article?.views)} />*/}
        {/*</div>*/}
        {/*<div className={cls.articleInfo}>*/}
        {/*  <Icon className={cls.icon} Svg={CalendarIcon} />*/}
        {/*  <Text text={article?.createdAt} />*/}
        {/*</div>*/}
        {/*{article?.blocks.map(renderBlock)}*/}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
