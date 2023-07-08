import cls from "./PageLoader.module.scss";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Loader } from "shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    console.log('asdasd')
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
