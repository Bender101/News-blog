import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation("profile");

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("profile")} />
      {readonly ? (
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t("edit")}
        </Button>
      ) : (
        <>
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t("cancel")}
          </Button>
          <Button
            className={cls.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t("save")}
          </Button>
        </>
      )}
    </div>
  );
};
