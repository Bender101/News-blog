import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card } from "@/shared/ui/redesigned/Card";
import { ArticleAdditionalInfo } from "@/widgets/ArticleAdditionalInfo";
import { getArticleDetailsData } from "@/entities/Article";
import cls from "./AdditionalInfoContainer.module.scss";
import { getRouteArticleEdit } from "@/shared/const/router";
import { getArticleDetailsIsLoading } from "@/entities/Article";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";

export const AdditionalInfoContainer = memo(() => {
  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);

  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);

  if (isLoading) {
    return (
      <Card border="round" padding="24">
        <VStack gap="32">
          <HStack gap="8">
            <Skeleton height={32} width={32} border="50%" />
            <Skeleton height={32} width={122} />
          </HStack>
          <Skeleton height={42} width={144} border="34px" />
          <Skeleton height={24} width={216} />
        </VStack>
      </Card>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <Card padding="24" border="round" className={cls.card}>
      <ArticleAdditionalInfo
        onEdit={onEditArticle}
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
      />
    </Card>
  );
});
