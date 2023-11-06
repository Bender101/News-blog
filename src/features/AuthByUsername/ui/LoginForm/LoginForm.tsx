import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { loginByUsername } from "../../model/services/loginByUsername";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t("auth_form")} />
        {error && <Text text={t("auth_error")} theme={TextTheme.ERROR} />}
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
