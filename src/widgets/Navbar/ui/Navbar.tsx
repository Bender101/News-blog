import cls from "./Navbar.module.scss";
import { memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import { LoginModal } from "@/features/AuthByUsername";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Text, TextTheme } from "@/shared/ui/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { HStack } from "@/shared/ui/Stack";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { getRouteArticleCreate } from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/lib/features";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  if (authData) {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <header
                    className={classNames(cls.NavbarRedesigned, {}, [
                        className,
                    ])}
                >
                    <HStack gap="16" className={cls.actions}>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </header>
            }
            off={
                <header className={classNames(cls.navbar, {}, [className])}>
                    <Text
                        className={cls.appName}
                        title={t("news_blog")}
                        theme={TextTheme.INVERTED}
                    />
                    <AppLink
                        to={getRouteArticleCreate()}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.createBtn}
                    >
                        {t("create_article")}
                    </AppLink>
                    <HStack gap="16" className={cls.actions}>
                        <NotificationButton />
                        <AvatarDropdown />
                    </HStack>
                </header>
            }
        />
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("sign_in")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
    </header>
  );
});
