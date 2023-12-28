import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/deprecated/Text";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { EditableProfileCard } from "@/features/editableProfileCard";

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
    <Page data-testid="ProfilePage" className={classNames("", {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
