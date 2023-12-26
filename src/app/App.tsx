import React, { Suspense, useEffect } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { SideBar } from "@/widgets/SideBar";
import { useSelector } from "react-redux";
import { getUserInited, initAuthData } from "@/entities/User";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { PageLoader } from "@/widgets/PageLoader";
import {ToggleFeatures} from "@/shared/lib/features";
import { MainLayout } from "@/shared/layouts/MainLayout";

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
      <ToggleFeatures
          feature="isAppRedesigned"
          off={
            <div className={classNames('app', {}, [theme])}>
              <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                  <SideBar />
                  <AppRouter />
                </div>
              </Suspense>
            </div>
          }
          on={
            <div className={classNames('app_redesigned', {}, [theme])}>
              <Suspense fallback="">
                <MainLayout
                    header={<Navbar />}
                    content={<AppRouter />}
                    sidebar={<SideBar />}
                />
              </Suspense>
            </div>
          }
      />
  );
};
