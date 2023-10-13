import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import cls from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import {Currency, CurrencySelect} from "entities/Currency";
import {Country, CountrySelect } from "entities/Country";
import { Avatar } from "shared/ui/Avatar/Avatar";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAvatar,
  onChangeCountry,
  onChangeCurrency,
  onChangeUsername,
  onChangeCity,
  onChangeAge,
}: ProfileCardProps) => {
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("error_title")}
          text={t("error_body")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
            <div className={cls.avatarWrapper}>
              <Avatar src={data?.avatar} />
            </div>
        )}
        <Input
          value={data?.first}
          placeholder={t("first_name")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          placeholder={t("last_name")}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          placeholder={t("age")}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
          type="number"
        />
        <Input
          value={data?.city}
          placeholder={t("city")}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t("user_name")}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t("url_avatar")}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
