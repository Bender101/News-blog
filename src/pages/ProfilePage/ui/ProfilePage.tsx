import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { profileReducer } from "entities/Profile";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>{t("profile_page")}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
