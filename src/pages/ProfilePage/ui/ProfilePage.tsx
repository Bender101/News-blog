import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Text } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page/Page";
import { VStack } from "@/shared/ui/Stack";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { profileReducer } from "@/features/editableProfileCard/model/slice/profileSlice";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("profile");

  if (!id) {
    return <Text text={t("profile_not_found")} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames("", {}, [className])}>
        <VStack max gap="16">
          <EditableProfileCard id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
