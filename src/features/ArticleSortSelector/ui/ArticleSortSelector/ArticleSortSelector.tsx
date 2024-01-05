import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Select, SelectOption } from "@/shared/ui/deprecated/Select";
import { SortOrder } from "@/shared/types/sort";
import cls from "./ArticleSortSelector.module.scss";
import { ArticleSortField } from "@/entities/Article";
import { ToggleFeatures } from "@/shared/lib/features";
import { ListBox } from "@/shared/ui/redesigned/Popups";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/redesigned/Text";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("asc"),
      },
      {
        value: "desc",
        content: t("desc"),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("by_created_date"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("naming"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("viewed"),
      },
    ],
    [t]
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div
          className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
            className,
          ])}
        >
          <VStack gap="8">
            <Text text={t("sort_by")} />
            <ListBox
              items={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
            />
            <ListBox
              items={orderOptions}
              value={order}
              onChange={onChangeOrder}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <Select<ArticleSortField>
            options={sortFieldOptions}
            label={t("sort_by")}
            value={sort}
            onChange={onChangeSort}
          />
          <Select
            options={orderOptions}
            label={t("by")}
            value={order}
            onChange={onChangeOrder}
            className={cls.order}
          />
        </div>
      }
    />
  );
});
