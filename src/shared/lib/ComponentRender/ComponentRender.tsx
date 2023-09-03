import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";
import i18nForTests from "../../config/i18nForTests/i18nForTests";
import { MemoryRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const ComponentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {}
) => {
  const { route = "/", initialState } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};
