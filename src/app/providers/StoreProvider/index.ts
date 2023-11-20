import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch, createReduxStore } from "./config/store";
import type { StateSchema, ThunkConfig, StateSchemaKey, ReduxStoreWithManager } from "./config/StateSchema";

export { StoreProvider, createReduxStore };
export type { AppDispatch, StateSchema, ThunkConfig, StateSchemaKey, ReduxStoreWithManager };

