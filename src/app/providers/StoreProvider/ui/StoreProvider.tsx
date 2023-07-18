import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../index";
import { StateSchema } from "../config/stateSchema";
import { DeepPartial } from "redux";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
}) => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
