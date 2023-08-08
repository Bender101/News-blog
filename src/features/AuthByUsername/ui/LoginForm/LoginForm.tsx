import cls from "./LoginForm.module.scss";
import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/LoginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../services/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => dispatch(loginActions.setUsername(value)),
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => dispatch(loginActions.setPassword(value)),
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t("auth_form")} />
      {error && (
        <Text text={t('auth_error')} theme={TextTheme.ERROR}>
          {error}
        </Text>
      )}
      <Input
        className={cls.input}
        placeholder={t("username")}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        placeholder={t("password")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        disabled={isLoading}
        theme={ButtonTheme.OUTLINE}
        className={classNames(cls.loginBtn, {}, [className])}
        onClick={onLoginClick}
      >
        {t("sign_in")}
      </Button>
    </div>
  );
});
