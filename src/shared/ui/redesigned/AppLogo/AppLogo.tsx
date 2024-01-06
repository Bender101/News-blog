import React, { memo } from 'react';
import cls from './AppLogo.module.scss';
import { HStack } from '../../redesigned/Stack';
import AppSvg from '@/shared/assets/icons/news_article_blog.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
    return (
      <HStack
        max
        justify="center"
        className={classNames(cls.appLogoWrapper, {}, [className])}
      >
        <AppSvg
          width={size}
          height={size}
          color="black"
          className={cls.appLogo}
        />
        <div className={cls.gradientBig} />
        <div className={cls.gradientSmall} />
      </HStack>
    );
});
