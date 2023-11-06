import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";
import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page/Page";

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation("translation");
  return (
    <Page className={classNames(cls.notFoundPage, {}, [className])}>
      {t("not_found")}
    </Page>
  );
};
