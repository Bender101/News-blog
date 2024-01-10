import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { getRouteAdmin, getRouteProfile, getRouteSettings } from "@/shared/const/router";


interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                {
                    content: t('admin_panel'),
                    href: getRouteAdmin(),
                },
            ]
            : []),
        {
            content: t('settings'),
            href: getRouteSettings(),
        },
        {
            content: t('profile'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('logout'),
            onClick: onLogout,
        },
    ];

  return (
      <ToggleFeatures
          feature="isAppRedesigned"
          on={
              <Dropdown
                  direction="bottom left"
                  className={classNames('', {}, [className])}
                  items={items}
                  trigger={<Avatar size={40} src={authData.avatar} />}
              />
          }
          off={
              <DropdownDeprecated
                  direction="bottom left"
                  className={classNames('', {}, [className])}
                  items={items}
                  trigger={
                      <AvatarDeprecated
                          fallbackInverted
                          size={30}
                          src={authData.avatar}
                      />
                  }
              />
          }
      />
  );
});
