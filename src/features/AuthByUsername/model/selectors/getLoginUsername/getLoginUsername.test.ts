import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUserName.test", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "12345",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('12345');
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
